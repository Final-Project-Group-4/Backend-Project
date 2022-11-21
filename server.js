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
// app.use(express.static());

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
