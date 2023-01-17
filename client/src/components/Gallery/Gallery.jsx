import React, { useEffect } from "react";
import "./_Gallery.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Contacts } from "../../components/export";
import UploadImage from '../../pages/Gallery/UploadImage';
import axios from 'axios';

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const getGallery = async () => {
    const allImages = await axios.get(
      // `https://${process.env.REACT_APP_CLOUDINARY_API_KEY}:${process.env.REACT_APP_CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/resources/image?max_results=50`
    );
    if (allImages.status === 200) {
      setGallery(allImages);
    } else {
      console.error('Something went wrong');
    }
  };

  useEffect(() => {
    getGallery();
  }, []);

  // Modal handler
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };
  // close modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  // Previous image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(gallery.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  // Next image
  const nextSlide = () => {
    slideNumber + 1 === gallery.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
    
    <div className="container">
      
      <h2>Photo gallery</h2>
      
      <div className="gallery-wrap">
        {gallery &&
          gallery.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>


      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            <img src={gallery[slideNumber].img} alt="safari" />
          </div>
        </div>
      )}
      <UploadImage />
      </div>
      
        <Contacts />
    </>
  );
}


