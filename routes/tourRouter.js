import express from "express";
import {
  deleteTour,
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
} from "../controllers/tourController.js";

//import { protectController } from "../middleware/protectController.js";

const router = express.Router();

router.route("/").get(getAllTours).post(createTour);

router.route("/:id").get(getSingleTour).put(updateTour).delete(deleteTour);
//protectController removed as it is not allowing to test in postman

export default router;
