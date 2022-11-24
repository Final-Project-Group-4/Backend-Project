import jwt from "jsonwebtoken";
import { promisify } from "util";
import UserModel from "../models/userModel.js";

export const protectController = (req, res, next) => {
  //We will take the token from request.headers.authorization and split [1] as token.
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Not Authorized" });

    const authorized = jwt.verify(token, process.env.JWT_SECRET);
    console.log(authorized);

    if (authorized) {
      // we are attaching id to the request object in order tobe able to use it in controller
      req.userId = authorized.id;
      next();
    } else {
      res.status(401).json({ status: "Fail", message: "Not Authorized" });
    }
    //we will call next only when if it is a valid
  } catch (err) {
    res.status(402).json({ message: err.message });
  }

  //if token is not valid we will send a bad request response back to the front end
};

export const protectController1 = async (req, res, next) => {
  //1) Get the token and check if its there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "You are not logged in! Please log in to get access.",
      });
    }
  }

  //2) Verification of token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //changed the password after the token is issued
  //3) Check if user still exists
  const currentUser = await UserModel.findById(decoded.id);
  if (!currentUser) {
    return res.status(401).json({
      message: "The user belonging to the token no longer exists",
    });
  }

  //4) Check if user changed password after the token was issued.
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return res.status(401).json({
      message: "User recently changed password. Please login again",
    });
  }
  req.user = currentUser;
  next();
};
