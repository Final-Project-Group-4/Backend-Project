import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email);

  const currentUser = await User.findOne({ email });
  console.log(currentUser);

  if (!currentUser)
    return res.status(400).json({
      status: "failed",
      message: "The email Or the password is Wrong",
    });

  const verified = await bcrypt.compare(password, currentUser.password);
  console.log(password);
  console.log(currentUser.password);
  if (!verified)
    return res.status(400).json({
      status: "failed",
      message: "Password verification failed.",
    });

  const payload = {
    email,
    userName: currentUser.name,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.status(200).json({
    status: "success",
    data: { email: currentUser.email, name: currentUser.name, token },
  });
};
export const logout = async (req, res) => {};
