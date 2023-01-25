import axios from 'axios';

export const getAllPhotos = async (req, res) => {
  try {
    axios
      .get(
        `https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/image?max_results=40`
      )
      .then((response) => {
        res.status(200).json(response.data.resources);
      });
  } catch {
    (error) => {
      console.log(error);
      console.error('Something went wrong');
    };
  }
};

export const deletePhoto = async (req, res, next) => {
  const { public_id } = req.params;

  const url = `https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/image/upload`;
  // axios
  //   .delete(url, { public_ids: public_id })
  axios
    .delete(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: `public_ids[]=${public_id}`,
    })
    .then((response) => {
      res.status(200).json(response.data.resources);
    })
    .catch((error) => {
      console.log(error);
      console.error('Something went wrong');
      next(error);
    });
};
