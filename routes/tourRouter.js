import express from 'express';
import {
  deleteTour,
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  getToursByType,
} from '../controllers/tourController.js';
import { protectController } from '../middleware/protectController.js';

const router = express.Router();

router.route('/').get(getAllTours).post(protectController, createTour);

router
  .route('/:id')
  .get(getSingleTour)
  .put(protectController, updateTour)
  .delete(protectController, deleteTour);

router.route('/category/:type').get(getToursByType);

export default router;
