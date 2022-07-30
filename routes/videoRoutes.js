import express from "express";
import videoController from "../controllers/videoController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();
//create a video
router.post("/", auth, videoController.addVideo);
router.put("/:id", auth, videoController.updateVideo);
router.delete("/:id", auth, videoController.deleteVideo);

router.get("/find/:id", videoController.getVideo);
router.put("/view/:id", videoController.addViewOnVideo);
router.get("/random", videoController.randomVideos);
router.get("/trend", videoController.trendVideos);
router.get("/sub", auth, videoController.subscribedVideos);
router.get("/tags", videoController.getByTag);
router.get("/search", videoController.searchVideos);
export default router;
