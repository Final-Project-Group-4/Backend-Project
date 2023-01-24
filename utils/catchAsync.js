export const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
    // it sends the error to our global error handler
  };
};

// with wrapping our code with this one we can get rid of many try catch blocks
