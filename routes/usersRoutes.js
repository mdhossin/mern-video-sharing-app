import express from "express";
import usersController from "../controllers/usersController.js";

import auth from "../middlewares/auth.js";

const router = express.Router();

//update user
router.put("/:id", auth, usersController.updateUser);

//delete user
router.delete("/:id", auth, usersController.deleteUser);

//get a user
router.get("/find/:id", usersController.getUser);

//subscribe a user
router.put("/sub/:id", auth, usersController.subscribe);

//unsubscribe a user
router.put("/unsub/:id", auth, usersController.unsubscribe);

//like a video
router.put("/like/:videoId", auth, usersController.like);

//dislike a video
router.put("/dislike/:videoId", auth, usersController.dislike);

export default router;
