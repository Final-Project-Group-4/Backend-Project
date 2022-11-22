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

//addPhoto created by Rekha
export const addPhoto = async (req, res, next) => {
  try {
    const { name, email, photo } = req.body;
    const newImage = new ImageModel({
      name,
      email,
      photo,
    });
    await newImage.save();
    res.status(201).json({ status: "success", data: newImage });
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
