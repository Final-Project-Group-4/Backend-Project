import express from "express";
import {
  forgotPassword,
  getAllUsers,
  login,
  logout,
  resetPassword,
  signup,
  updateUser,
} from "../controllers/authController.js";
import { protectController } from "../middleware/protectController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

router.route("/").get(protectController, getAllUsers);

router.route("/:id").patch(updateUser);

export default router;
