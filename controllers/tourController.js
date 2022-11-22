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
