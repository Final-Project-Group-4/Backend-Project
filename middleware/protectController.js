import jwt from "jsonwebtoken";

export const protectController = (req, res, next) => {
  //We will take the token from request.headers.authorization and split [1] as token.
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Not Authorized" });

    const authorized = jwt.verify(token, process.env.JWT_SECRET);

    if (authorized) {
      req.userEmail = authorized.email;
      next();
    } else {
      res.status(401).json({ message: "Not Authorized" });
    }
    //we will call next only when if it is a valid
  } catch (err) {
    res.status(402).json({ message: err.message });
  }

  //if token is not valid we will send a bad request response back to the front end
};
