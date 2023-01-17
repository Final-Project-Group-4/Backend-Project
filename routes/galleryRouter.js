import express from 'express';
import {
  getAllPhotos,
  getSinglePhoto,
  deletePhoto,
} from '../controllers/galleryController.js';
import { protectController } from '../middleware/protectController.js';

const router = express.Router();

router.route('/').get(getAllPhotos)
router.route('/:id').get(getSinglePhoto);
router.route('/:public_id').delete(deletePhoto);

export default router;
