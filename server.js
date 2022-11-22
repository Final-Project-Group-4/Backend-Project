import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ extended: true, limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(morgan("dev"));
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// app.use(express.static());

// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(`${__dirname}/public`));
//console.log(__dirname);

// routes:
// app.use("/api/tours", tourRoute);
// app.use("/api/gallery", galleryRoute);

const port = process.env.PORT || 4000;
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
