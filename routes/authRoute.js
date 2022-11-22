import express from "express";
import {login,logout} from "../controllers/authController.js";


const router = express.Router()


router.post("/admin/login", login)
router.post("/admin/logout", logout)


export default router