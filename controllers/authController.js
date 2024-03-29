import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendEmail from '../utils/email.js';
import crypto from 'crypto';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

//creating the token
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: '90d',
  });
};

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  // we used id data as payload
  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      userModel: newUser,
    },
  });
});

export const login = catchAsync(async (req, res, next) => {
  // check if email or password provided
  const { email, password } = req.body;

  if (!email || !password) {
    // return res.status(400).json({
    //   status: 'failed',
    //   message: 'Please provide an email and password.',
    // });
    return next(new AppError('Please provide email and password', 400));
  }

  const currentUser = await User.findOne({ email });

  // Check if user exists
  if (!currentUser) {
    // return res.status(400).json({
    //   status: 'failed',
    //   message: 'The email or the password is wrong',
    // });
    return next(new AppError('Incorrect email or password', 401));
  }

  // check if password is correct with the compare method from bcrypt package
  const verified = await bcrypt.compare(password, currentUser.password);

  if (!verified) {
    // return res.status(400).json({
    //   status: 'failed',
    //   message: 'Password verification failed.',
    // });
    return next(new AppError('Incorrect password, please try again', 401));
  }

  // we used id data as payload
  const token = signToken(currentUser._id);
  res.status(200).json({
    status: 'success',
    token,
    id: currentUser._id,
    email: currentUser.email,
  });
});

export const logout = async (req, res, next) => {
  // it clears the jwt token and sets the value as loggedout, so the token is not valid anymore
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: 'success',
  });
};

export const getAllUsers = catchAsync(async (req, res, next) => {
  const data = await User.find();
  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const user_id = req.params.id;
  const user = req.body;
  const updatedUser = await User.findByIdAndUpdate(user_id, user, {
    new: true,
    runValidators: true,
  });

  if (!updatedUser) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(201).json({
    status: 'success',
    data: updatedUser,
  });
});

export const updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from the collection
  const user = await User.findById(req.params.id).select('+password');

  const comparison = await user.correctPassword(req.body.passwordCurrent, user.password);
  // 2) Check if POSTed current password is correct
  if (!comparison) {
    // return res.status(400).json({
    //   status: 'failed',
    //   message: 'Please provide right password.',
    // });
    return next(new AppError('Your current password is wrong!', 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  //removes the password from output
  user.password = undefined;
  //console.log(user);

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

// when user will enter his email, then he will get an email with a link where you can click, then thats gonna take it to the page where you can enter new password.
// 1st => user sends a post request to the /forgotpassword route only with his email address. This will create a reset token(a random token not jason web token) and send it to his email address.
// 2nd => Then user will send the token from email along with new password in order to update his password.

export const forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('There is no user with this email address', 404));
  }

  // 2) Generate the random token:
  // Since it is related with user data and more than couple lines, we are creating an instant method in model.

  const resetToken = user.createPasswordResetToken();
  // we need to use save method in order to save the values created in createResetPasswordToken function.
  await user.save({ validateBeforeSave: false });
  // Since we dont provide all required data in model, we need to add this option inside save method.

  // 3) Send it to users email

  // normally (when we have frontend) user get a button and click it to go to reset page.

  const resetURL = `${req.protocol}://${req.get('host')}/api/admin/resetPassword/${resetToken}`;

  // console.log(resetURL);

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this message.`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message,
      resetURL,
      token: resetToken,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    // if there is an error in sending emails, then it will delete these fields in document and throw error.
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save({ validateBeforeSave: false });
    // return next(new Error('There was an error sending the email. Try again later!', 500));
    return new AppError('There was an error sending the email. Try again later!', 500);
  }
});

export const resetPassword = catchAsync(async (req, res, next) => {
  //1) get user based on the token
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  //2) set new password only if the token has not expired and there is user set the new password
  if (!user) {
    // return res.status(400).json({ message: 'Token is invalid or has expired' });
    return next(new AppError('Token is invalid or expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  //3) Updated changedPasswordAt property for the current user
  await user.save();

  //4) Log the user in , send the jwt to the client
  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
  });
});
