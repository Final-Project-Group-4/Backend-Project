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

// routes:
app.use("/api/tours", tourRouter);
app.use("/api/admin", adminRouter);
app.use("/api/gallery", galleryRouter);

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
