import Tour from "../models/tourModel.js";

export const getAllTours = async (req, res, next) => {
  try {
    const data = await Tour.find();
    res.status(200).json({
      status: "success",
      results: data.length,
      data,
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
export const createTour = async (req, res, next) => {};
export const updateTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(tour);
  } catch (e) {
    next(e);
  }
};
export const deleteTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: `${tour} is deleted!` });
  } catch (e) {
    next(e);
  }
};
