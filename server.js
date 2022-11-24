import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import tourRouter from "./routes/tourRouter.js";
import adminRouter from "./routes/adminRouter.js";
import galleryRouter from "./routes/galleryRouter.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ extended: true, limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(morgan("dev"));

// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(`${__dirname}/public`));
//console.log(__dirname);

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   console.log(req.headers);
//   next();
// });

// routes:
app.use("/api/tours", tourRouter);
app.use("/api/admin", adminRouter);
app.use("/api/gallery", galleryRouter);

//To handle all the unhandled routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find the route ${req.originalUrl} on this server!`,
  });
});

//Global error handler
app.use((err, req, res, next) => {});

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
