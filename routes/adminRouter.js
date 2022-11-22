import express from "express";
import {
  getAllUsers,
  login,
  logout,
  signup,
  updateUser,
} from "../controllers/authController.js";
import { protectController } from "../middleware/protectController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/", logout);
router.get("/", protectController, getAllUsers);
router.patch("/:id", updateUser);

export default router;
