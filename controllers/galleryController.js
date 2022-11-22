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

export const getSinglePhoto = () => {
  console.log("get one image");
};

export const deletePhoto = () => {
  console.log("delete image");
};
