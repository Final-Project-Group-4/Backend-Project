import express from "express";
import {
  deleteTour,
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
} from "../controller/tourController.js";

const router = express.Router();

router.get("/", getAllTours); //get all the tours
router.post("/", protectedRoute, createTour); // to create a new tour

router.get("/:id", getSingleTour); // To get a single tour by sending the tourId
router.put("/:id", protectedRoute, updateTour); // To update a single tour by sending the tourId
router.delete("/:id", protectedRoute, deleteTour); // To delete a single tour by sending the tourId

export default router;
