import express from "express";
import {
  getAllUsers,
  login,
  logout,
  signup,
  updateUser,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import { protectController } from "../middleware/protectController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.delete("/logout", logout);
router.get("/", protectController, getAllUsers);
router.patch("/:id", updateUser);

router.post("/forgotpassword", forgotPassword);
router.patch("/resetpassword/:token", resetPassword);

export default router;
