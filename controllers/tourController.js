import Tour from '../models/tourModel.js';

export const getAllTours = async (req, res, next) => {
  try {
    const data = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTour = async (req, res, next) => {
  //console.log(req.body);
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newTour,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleTour = async (req, res, next) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json(tour);
  } catch (error) {
    next(error);
  }
};

export const getToursByType = async (req, res, next) => {
  console.log(req.params.type);
  try {
    const tour = await Tour.find({ type: req.params.type });
    res.status(200).json(tour);
  } catch (error) {
    next(error);
  }
};

export const deleteTour = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const tour = await Tour.findByIdAndRemove(req.params.id);
    if (tour === null) {
      res.status(400).json({ msg: `there is no such tour` });
    } else {
      res.status(200).json({ msg: `${tour} is deleted!` });
    }
  } catch (e) {
    console.log(e);
  }
};

//Update Tour added by Rekha
export const updateTour = async (req, res, next) => {
  try {
    const tour_id = req.params.id;
    const tour = req.body;
    const updatedTour = await Tour.findByIdAndUpdate(tour_id, tour, {
      new: true,
    });
    res.status(201).json({
      status: 'success',
      data: updatedTour,
    });
  } catch (error) {
    // 409 => indicates a request conflict with the current state of target.
    res.status(409).send(error.message);
  }
};
