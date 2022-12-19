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
import cloudinary from 'cloudinary';

const app = express();
dotenv.config();
//Cloudinary Configuration:
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors());
app.use(express.json({ extended: true, limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(morgan('dev'));

// app.delete('/:public_id', async (req, res) => {
//   const { public_id } = req.params;
//   try {
//     await cloudinary.uploader.destroy(public_id);
//     res.status(200).send();
//   } catch (error) {
//     res.status(400).send();
//   }
// });
// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(`${__dirname}/public`));
//console.log(__dirname);

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   console.log(req.headers);
//   next();
// });

// routes:
app.use('/api/tours', tourRouter);
app.use('/api/admin', adminRouter);
app.use('/api/gallery', galleryRouter);

app.all('*', (req, res, next) => {
  next(new AppError('Page Not Found!', 404));
});

// // global error handler
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
