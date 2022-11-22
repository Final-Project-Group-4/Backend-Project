import express from "express";
import {
  deleteTour,
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
} from "../controllers/tourController.js";
import { protectController } from "../middleware/protectController.js";

const router = express.Router();

router.get("/", getAllTours); //get all the tours
router.post("/", protectController, createTour); // to create a new tour

router.get("/:id", getSingleTour); // To get a single tour by sending the tourId
router.put("/:id", protectController, updateTour); // To update a single tour by sending the tourId
router.delete("/:id", protectController, deleteTour); // To delete a single tour by sending the tourId

export default router;
