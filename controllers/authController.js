import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    // we used id data as payload
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "90d",
    });

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
  const token = jwt.sign({ id: currentUser._id }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });
  res.status(200).json({
    status: "success",
    token,
  });
};

export const logout = async (req, res) => {};

export const updateUser = async (req, res, next) => {};
