import Comment from "../models/commentModel.js";
import Video from "../models/videoModel.js";
import CustomErrorHandler from "../services/CustomErrorHandler.js";
const commentsController = {
  async addComment(req, res, next) {
    const newComment = new Comment({
      ...req.body,
      userId: req.user.id,
    });

    try {
      const savedComment = await newComment.save();

      res.status(200).json(savedComment);
    } catch (error) {
      return next(error);
    }
  },

  async getComments(req, res, next) {
    try {
      const comments = await Comment.find({
        videoId: req.params.videoId,
      });

      res.status(200).json(comments);
    } catch (error) {
      return next(error);
    }
  },

  async deleteComment(req, res, next) {
    try {
      const comment = await Comment.findById(req.params.id);
      const video = await Video.findById(req.params.id);

      if (req.user.id === comment.userId || req.user.id === video.userId) {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Ths comment has been deleted.");
      } else {
        return next(
          CustomErrorHandler.badRequest("You can delete only your comment.")
        );
      }
    } catch (error) {
      return next(error);
    }
  },
};

export default commentsController;
