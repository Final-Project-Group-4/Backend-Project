import React from "react";
import "./_Gallery.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Contacts, Footer, Navbar } from "../../components/export";

export default function Gallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

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
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  // Next image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
    <Navbar />
    <div className="container">
      
      <h2>Photo gallery</h2>
      
      <div className="gallery-wrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
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


{/* <div className="row">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="column"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div> */}



 {/* <div className="row">
  <div className="column">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                // className="column"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
          </div>
          <div className="column">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                // className="column"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
          </div>
          <div className="column">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                // className="column"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
          </div>
          <div className="column">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                // className="column"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
          </div>
      </div>  */}



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
            <img src={galleryImages[slideNumber].img} alt="safari" />
          </div>
        </div>
      )}
      </div>
        <Contacts />
          <Footer />
    
    </>
  );
}


