import express from 'express';
import { getAllPhotos, deletePhoto } from '../controllers/galleryController.js';

const router = express.Router();

router.route('/').get(getAllPhotos);
router.route('/:public_id').delete(deletePhoto);

export default router;
