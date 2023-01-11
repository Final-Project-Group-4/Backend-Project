import ImageModel from '../models/galleryModel.js';
import TourModel from '../models/tourModel.js';
import cloudinary from 'cloudinary';
import axios from 'axios';

// export const getAllPhotos = async (req, res, next) => {
//   try {
//     const data = await ImageModel.find();
//     res.status(200).json({
//       status: 'success',
//       results: data.length,
//       data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getAllPhotos = async (req,res) => {
  try {
    axios.get(
    `https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/image?max_results=40`
  ).then(response => { res.status(200).json(response.data.resources)})
}
  
   catch {(error=>{
    console.log(error);
    console.error('Something went wrong');
  }) }
};

//addPhoto created by Rekha
export const addPhoto = async (req, res, next) => {
  try {
    const { name, email, photo, tourId } = req.body;
    const newImage = new ImageModel({
      name,
      email,
      photo,
      tourId,
    });
    await newImage.save();
    const updateTour = await TourModel.findByIdAndUpdate(
      tourId,
      { $push: { gallery: newImage._id } },
      { new: true }
    );
    res.status(201).json({ status: 'success', data: newImage, update: updateTour });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const getSinglePhoto = async (req, res, next) => {
  try {
    const photo = await ImageModel.findById(req.params.id);
    res.status(200).json(photo);
  } catch (error) {
    next(error);
  }
};

export const deletePhoto = async (req, res, next) => {
  const { public_id } = req.params;
  //   try {
  //     await cloudinary.uploader.destroy(public_id);
  //     res.status(200).send();
  //   } catch (error) {
  //     res.status(400).send();
  //   }
  // };
  try {
    const image = await ImageModel.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: `${image} is deleted!` });
  } catch (e) {
    next(e);
  }
};

export const getTourPhotos = async (req, res, next) => {
  try {
    const tour = req.params.tour;
    const data = await Model.find({ _id }).populate('imageModel');
    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
