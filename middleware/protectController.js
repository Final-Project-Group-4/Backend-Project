import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

export const protectController = async (req, res, next) => {
  //We will take the token from request.headers.authorization and split [1] as token.
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Not Authorized" });

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    const user = await User.findById(decoded.id);

    // Check if user changes password after the token was issued
    if (user.changedPasswordAfter(decoded.iat)) {
      return next(
        new Error("User recently changed password! Please log in again.", 401)
      );
    }

    if (decoded) {
      // we are attaching user data to the request object in order to be able to use it in controller in the next steps, in order to pass data from one middleware to other one we use req object
      req.user = user;
      // Grant access to protected route
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
