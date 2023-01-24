import Tour from '../models/tourModel.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getAllTours = catchAsync(async (req, res, next) => {
  const data = await Tour.find();
  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
});

export const createTour = catchAsync(async (req, res, next) => {
  //console.log(req.body);
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status: 'success',
    newTour,
  });
});

export const getSingleTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);

  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    tour,
  });
});

export const getToursByType = catchAsync(async (req, res, next) => {
  //console.log(req.params.type);
  const tour = await Tour.find({ type: req.params.type });

  if (!tour) {
    return next(new AppError('No tour found with that type', 404));
  }
  res.status(200).json({
    status: 'success',
    tour,
  });
});

export const deleteTour = catchAsync(async (req, res, next) => {
  //console.log(req.params.id);
  const tour = await Tour.findByIdAndRemove(req.params.id);

  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }

  res.status(204).json({ status: 'success' });
});

export const updateTour = catchAsync(async (req, res, next) => {
  const tour_id = req.params.id;
  const tour = req.body;
  const updatedTour = await Tour.findByIdAndUpdate(tour_id, tour, {
    new: true,
    runValidators: true,
  });

  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }

  res.status(201).json({
    status: 'success',
    updatedTour,
  });
});
