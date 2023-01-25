import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import tourRouter from './routes/tourRouter.js';
import adminRouter from './routes/adminRouter.js';
import galleryRouter from './routes/galleryRouter.js';
import AppError from './utils/appError.js';
import { globalErrorHandler } from './middleware/errorHandler.js';
import path from 'path';
import { fileURLToPath } from 'url';

//errors occur in sync code but not handled anywhere
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = express();
dotenv.config();

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

app.use(express.static(path.join(__dirname, './client/build')));

app.use(cors());
app.use(express.json({ extended: true, limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(morgan('dev'));

// ROUTES:
app.use('/api/tours', tourRouter);
app.use('/api/admin', adminRouter);
app.use('/api/gallery', galleryRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// 404
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

const port = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE).then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
});

//errors occur in async code but not handled anywhere
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  process.exit(1);
});
