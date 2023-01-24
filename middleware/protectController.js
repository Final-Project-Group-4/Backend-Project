import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

export const protectController = catchAsync(async (req, res, next) => {
  //We will take the token from request.headers.authorization and split [1] as token.
  const token = req.headers.authorization?.split(' ')[1];
  //console.log('TOKEN', token);

  // if (!token) return res.status(401).json({ message: 'Not Authorized' });
  if (!token) return next(new AppError('Please log in to get access', 401));

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //console.log(decoded);

  const user = await User.findById(decoded.id);

  if (!user) {
    return next(new AppError('User could not be found. Please log in again.', 404));
  }

  // Check if user changes password after the token was issued
  if (user.changedPasswordAfter(decoded.iat)) {
    return next(new AppError('User recently changed password. Please log in again!', 401));
  }

  if (decoded) {
    // we are attaching user data to the request object in order to be able to use it in controller in the next steps, in order to pass data from one middleware to other one we use req object
    req.user = user;
    // Grant access to protected route
    next();
  } else {
    // res.status(401).json({ status: 'Fail', message: 'Not Authorized' });
    throw new AppError('Not authorized', 401);
  }
  //we will call next only when if it is a valid

  //if token is not valid we will send a bad request response back to the front end
});
