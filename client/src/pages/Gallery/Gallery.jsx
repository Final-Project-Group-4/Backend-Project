import { useContext, useEffect } from "react";
import "./_Gallery.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Contacts } from "../../components/export";
import UploadImage from "./UploadImage";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Context } from "../../context/Context";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { toast } from "react-toastify";

export default function Gallery() {
  const { t } = useTranslation();
  const [gallery, setGallery] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleDelete = async (public_id) => {
    setOpen(public_id);
  };

  const handleClose = async (answer) => {
    if (answer === "yes") {
      try {
        await axios.delete(`/api/gallery/${open}`);
        setGallery((oldState) =>
          oldState.filter((item) => item.public_id !== open)
        );

        toast.success("Image is deleted!");
        const allImages = await axios.get(`/api/gallery`);

        //console.log(allImages);
        if (allImages.status === 200) {
          setGallery(allImages.data);
        } else {
          console.error("Something went wrong");
        }
        setOpen(false);
      } catch (err) {
        setOpen(false);
        toast.error("Something went wrong!");
      }
    } else {
      setOpen(false);
    }
  };

  // const removeImage = async (public_id) => {
  //   await axios.delete(`/api/gallery/${public_id}`);
  //   setGallery((oldState) =>
  //     oldState.filter((item) => item.public_id !== public_id)
  //   );
  // };

  const getGallery = async () => {
    const allImages = await axios.get(`/api/gallery`);

    //console.log(allImages);
    if (allImages.status === 200) {
      setGallery(allImages.data);
    } else {
      console.error("Something went wrong");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div className="container gallery">
        {/* <h2>
          {t('photo')}
          <span>{t('gallery2')}</span>
        </h2> */}

        <div className="gallery-wrap">
          {gallery &&
            gallery.map((slide, index) => {
              return (
                <div className="single" key={index}>
                  {user && (
                    <button
                      onClick={() => handleDelete(slide.public_id)}
                      className="gallery-delete-btn"
                    >
                      x
                    </button>
                  )}

                  <img
                    src={slide.secure_url}
                    alt={slide.name}
                    onClick={() => handleOpenModal(index)}
                  />
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
              <img src={gallery[slideNumber].secure_url} alt="safari" />
            </div>
          </div>
        )}

        {user && (
          <div className="upload-container">
            <UploadImage />
          </div>
        )}
      </div>
      {/*---------------CONFIRM WINDOW FOR DELETE FUNCTION---------- */}
      <Dialog
        open={open ? true : false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this image?"}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose("no");
            }}
          >
            No
          </Button>
          <Button
            onClick={() => {
              handleClose("yes");
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Contacts />
    </>
  );
}
