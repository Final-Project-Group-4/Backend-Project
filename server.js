import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import tourRouter from './routes/tourRouter.js';
import adminRouter from './routes/adminRouter.js';
import galleryRouter from './routes/galleryRouter.js';
import AppError from './utils/appError.js';
import ErrorHandler from './middleware/errorHandler.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

app.use(express.static(path.join(__dirname, './client/build')));

app.use(cors());
app.use(express.json({ extended: true, limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(morgan('dev'));

// routes:
app.use('/api/tours', tourRouter);
app.use('/api/admin', adminRouter);
app.use('/api/gallery', galleryRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.all('*', (req, res, next) => {
  next(new AppError('Page Not Found!', 404));
});

// global error handler
app.use(ErrorHandler);

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
