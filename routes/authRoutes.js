import express from "express";
import authController from "../controllers/authController.js";
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.post("/google", authController.googleAuth);

export default router;
