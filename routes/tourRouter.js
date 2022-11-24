import express from "express";
import { getTourPhotos } from "../controllers/galleryController.js";
import {
  deleteTour,
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
} from "../controllers/tourController.js";
import { protectController1 } from "../middleware/protectController.js";

//import { protectController } from "../middleware/protectController.js";

const router = express.Router();

router.get("/", protectController1, getAllTours); //get all the tours
router.post("/", createTour); // to create a new tour

//protectController removed as it is not allowing to test in postman
router.get("/:id", getSingleTour); // To get a single tour by sending the tourId


router.put("/:id", updateTour); // To update a single tour by sending the tourId
router.delete("/:id", deleteTour); // To delete a single tour by sending the tourId


export default router;
