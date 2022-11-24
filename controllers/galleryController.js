import ImageModel from "../models/galleryModel.js";
import TourModel from "../models/tourModel.js";

export const getAllPhotos = async (req, res, next) => {
  try {
    const data = await ImageModel.find();
    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

//addPhoto created by Rekha
export const addPhoto = async (req, res, next) => {
  try {
    const { name, email, photo, tourId } = req.body;
    const newImage = new ImageModel({
      name,
      email,
      photo,
      tourId
    });
    await newImage.save();
    const updateTour = await TourModel.findByIdAndUpdate(tourId, { $push: { gallery: newImage._id } }, { new: true });
    res.status(201).json({ status: "success", data: newImage,update:updateTour });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const getSinglePhoto = async (req,res,next) => {
  try {
    
    const photo = await ImageModel.findById(req.params.id);
    res.status(200).json(photo);
  } catch (error) {
    next(error);
  }
  
};

export const deletePhoto = async (req,res,next) => {
  try {
    const image = await ImageModel.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: `${image} is deleted!` });
  } catch (e) {
    next(e);
  }
  
};

export const getTourPhotos = async (req,res,next) => {
  try {
    const tour = req.params.tour;
    const data = await Model.find({_id}).populate("imageModel");
    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}