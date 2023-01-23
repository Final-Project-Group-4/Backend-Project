// import React, { useState } from 'react';
// import axios from 'axios';
// import cloudinary from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.REACT_APP_CLOUD_NAME,
//   api_key: process.env.REACT_APP_API_KEY,
//   api_secret: process.env.REACT_APP_API_SECRET,
// });

// const UploadImage = () => {
//   const [img, setImg] = useState('');
//   const [imageData, setimageData] = useState({ url: '', public_id: '' });

//   const updateImage = (e) => {
//     setImg(e.target.files[0]);
//   };

//   const uploadImage = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append('file', img);
//     data.append('upload_preset', process.env.REACT_APP_PRESET_NAME);
//     data.append('cloud_name', process.env.REACT_APP_CLOUD_NAME);
//     data.append('folder', 'your-folder-name');
//     try {
//       const resp = await axios.post(
//         `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
//         data
//       );
//       setimageData({ url: resp.data.url, public_id: resp.data.public_id });
//     } catch (err) {
//       console.log('errr : ', err);
//     }
//   };
//   const deleteImage = async (e) => {
//     e.preventDefault();
//     cloudinary.v2.uploader
//       .destroy(imageData.public_id, function (error, result) {
//         console.log(result, error);
//       })
//       .then((resp) => console.log(resp))
//       .catch((_err) => console.log('Something went wrong, please try again later.'));
//   };

//   return (
//     <>
//       <form>
//         <input
//           type="file"
//           onChange={updateImage}
//           className="form-control shadow-sm"
//           id="image"
//           name="image"
//           accept="image/*"
//         />
//         <button onClick={uploadImage}>Upload</button>
//         <button onClick={deleteImage}>Remove</button>
//       </form>
//     </>
//   );
// };

// export default UploadImage;

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
//import { Cloudinary } from '@cloudinary/url-gen';

export default function UploadImage() {
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);

  const handleRemoveImage = (imgObj) => {
    setImageToRemove(imgObj.public_id);
    axios
      .delete(`/api/gallery/${imgObj.public_id}`)
      .then(() => {
        setImages((prev) => prev.filter((image) => image.public_id !== imgObj.public_id));
      })
      .catch((err) => console.log(err));
  };

  const handleOpenWidget = () => {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dkwpmwrlr',
        uploadPreset: 'ml_default',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          // console.log('Done! Here is the image info: ', result.info);
          // setImages((prev) => [
          //   ...prev,
          //   { url: result.info.url, public_id: result.info.public_id },
          // ]);
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      }
    );
    // open widget
    myWidget.open();
  };

  return (
    <div>
      <button id="upload-widget" className="cloudinary-button" onClick={() => handleOpenWidget()}>
        Upload pictures
      </button>
      <div className="images-preview-container">
        {images.map((image) => (
          <div className="image-preview">
            <img src={image.url} alt={image.title} />
            {imageToRemove !== image.public_id && (
              <i
                className="fa fa-times-circle close-icon"
                onClick={() => handleRemoveImage(image)}
              ></i>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
