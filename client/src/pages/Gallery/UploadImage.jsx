import { useState } from "react";
import axios from "axios";
//import { Cloudinary } from '@cloudinary/url-gen';

export default function UploadImage() {
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);

  const handleRemoveImage = (imgObj) => {
    setImageToRemove(imgObj.public_id);
    axios
      .delete(`/api/gallery/${imgObj.public_id}`)
      .then(() => {
        setImages((prev) =>
          prev.filter((image) => image.public_id !== imgObj.public_id)
        );
      })
      .catch((err) => console.log(err));
  };

  const handleOpenWidget = () => {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dkwpmwrlr",
        uploadPreset: "ml_default",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
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
      <button
        id="upload-widget"
        className="cloudinary-button"
        onClick={() => handleOpenWidget()}
      >
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
