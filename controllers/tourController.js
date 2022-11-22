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
export const getSingleTour = async (req, res, next) => {};
export const createTour = async (req, res, next) => {};
export const updateTour = async (req, res, next) => {};
export const deleteTour = async (req, res, next) => {};
