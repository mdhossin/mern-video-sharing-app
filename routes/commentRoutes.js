import express from "express";
import commentsController from "../controllers/commentsController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/", auth, commentsController.addComment);
router.delete("/:id", auth, commentsController.deleteComment);
router.get("/:videoId", commentsController.getComments);

export default router;
