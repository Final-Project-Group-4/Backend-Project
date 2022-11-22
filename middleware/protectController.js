import jwt from "jsonwebtoken";

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
