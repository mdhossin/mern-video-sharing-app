import express from "express";
import commentsController from "../controllers/commentsController.js";

const router = express.Router();

router.post("/", commentsController.addComment);
router.post("/:id", commentsController.deleteComment);
router.post("/:videoId", commentsController.getComments);

export default router;
