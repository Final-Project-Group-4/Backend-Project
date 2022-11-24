import express from "express";
import { getTourPhotos } from "../controllers/galleryController.js";
import {
  deleteTour,
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
} from "../controllers/tourController.js";
import { protectController } from "../middleware/protectController.js";

const router = express.Router();


router.route("/").get(getAllTours).post(protectController, createTour);

router.route("/:id").get(getSingleTour).put(protectController,updateTour).delete(protectController,deleteTour);


export default router;
