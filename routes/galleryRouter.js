import express from "express";
import {
  getAllPhotos,
  addPhoto,
  getSinglePhoto,
  deletePhoto,
} from "../controllers/galleryController.js";

const router = express.Router();

router.route("/").get(getAllPhotos).post(addPhoto);
router.route("/:id").get(getSinglePhoto).delete(deletePhoto);

export default router;
