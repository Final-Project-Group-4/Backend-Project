import React, { useEffect } from 'react';
import './_Gallery.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Contacts } from '../../components/export';
import UploadImage from './UploadImage';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();
  const [gallery, setGallery] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const getGallery = async () => {
    const allImages = await axios.get(`http://localhost:4000/api/gallery`);
    console.log(allImages);
    if (allImages.status === 200) {
      setGallery(allImages.data);
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
    slideNumber === 0 ? setSlideNumber(gallery.length - 1) : setSlideNumber(slideNumber - 1);
  };
  // Next image
  const nextSlide = () => {
    slideNumber + 1 === gallery.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      <div className="container gallery">
        <h2>
          {t('photo')}
          <span>{t('gallery2')}</span>
        </h2>

        <div className="gallery-wrap">
          {gallery &&
            gallery.map((slide, index) => {
              return (
                <div className="single" key={index} onClick={() => handleOpenModal(index)}>
                  <img src={slide.secure_url} alt="" />
                </div>
              );
            })}
        </div>

        {openModal && (
          <div className="sliderWrap">
            <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal} />
            <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevSlide} />
            <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextSlide} />
            <div className="fullScreenImage">
              <img src={gallery[slideNumber].secure_url} alt="safari" />
            </div>
          </div>
        )}
        <UploadImage />
      </div>

      <Contacts />
    </>
  );
}
