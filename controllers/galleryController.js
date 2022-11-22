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

export const getSinglePhoto = () => {
  console.log("get one image");
};

export const deletePhoto = () => {
  console.log("delete image");
};
