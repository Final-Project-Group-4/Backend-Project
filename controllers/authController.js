import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import sendEmail from "./email.js";
import crypto from "crypto";

//refactoring the code for jwt.sign() and creating the token
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });
};

export const signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    // we used id data as payload
    const token = signToken(newUser._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        userModel: newUser,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const data = await User.find();
    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  // check if email or password provided
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "failed",
      message: "Please provide an email and password.",
    });
  }

  const currentUser = await User.findOne({ email });

  // Check if user exists
  if (!currentUser)
    return res.status(400).json({
      status: "failed",
      message: "The email or the password is wrong",
    });

  // check if password is correct with the compare method from bcrypt package
  const verified = await bcrypt.compare(password, currentUser.password);

  console.log(password);
  console.log(currentUser.password);

  if (!verified)
    return res.status(400).json({
      status: "failed",
      message: "Password verification failed.",
    });

  // we used id data as payload

  const token = signToken(currentUser._id);
  res.status(200).json({
    status: "success",
    token,
  });
};

export const logout = async (req, res) => {};

export const updateUser = async (req, res, next) => {
  try {
    const user_id = req.params.id;
    const user = req.body;
    const updatedUser = await User.findByIdAndUpdate(user_id, user, {
      new: true,
    });
    res.status(201).json({
      status: "success",
      data: updatedUser,
    });
  } catch (error) {
    res.status(409).send(error.message);
  }
};

//forgot Password functionality by Rekha
export const forgotPassword = async (req, res, next) => {
  //1) Get user based on posted email
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({
      message: "There is no user found with this email id",
    });
  }
  //2) Generate the random reset token.
  // createPasswordResetToken function is in UserModel.js
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  //3) Send it to the user's Email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/admin/resetpassword/${resetToken}`;

  const message = `Forgot your Password? Submit a patch request with your new password and passwordConfirm to: ${resetURL}. \nIf you didnot forget your password, please ignore this email. `;
  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token(valid for 10 minutes)",
      message,
    });
    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return res
      .status(500)
      .json({ message: "There was an error sending email. Try again later!" });
  }
};

//Reset Password functionality by rekha
export const resetPassword = async (req, res, next) => {
  //1) get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await UserModel.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  //2) set new password only if the token has not expired and there is user set the new password
  if (!user) {
    return res.status(400).json({ message: "Token is invalid of has expired" });
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  //3) Updated changedPasswordAt property for the current user
  //4) Log the user in , send the jwt to the client
  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
};
