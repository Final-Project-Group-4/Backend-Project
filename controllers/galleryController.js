import ImageModel from "../models/galleryModel.js";

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

export const addPhoto = (req, res, next) => {
  console.log("add Image");
};

export const getSinglePhoto = async (req,res,next) => {
  try {
    const photo = await ImageModel.findById(req.params.id).populate("photo");
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
