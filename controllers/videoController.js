import CustomErrorHandler from "../services/CustomErrorHandler.js";
import Video from "../models/videoModel.js";
import User from "../models/userModel.js";

const videoController = {
  async addVideo(req, res, next) {
    try {
      const { userId, title, desc, imgUrl, videoUrl } = req.body;

      if (!imgUrl || !videoUrl) {
        return next(
          CustomErrorHandler.badRequest("You must upload image and Video.")
        );
      }

      if (!title || !desc) {
        return next(
          CustomErrorHandler.badRequest("You must add a description and title.")
        );
      }

      const newVideo = new Video({
        userId: req.user.id,
        title,
        desc,
        imgUrl,
        videoUrl,
      });

      const savedVideo = await newVideo.save();
      res.status(200).json(savedVideo);
    } catch (error) {
      return next(error);
    }
  },

  async updateVideo(req, res, next) {
    try {
      const video = await Video.findById(req.params.id);

      if (!video) {
        return next(CustomErrorHandler.notFound("Video not found."));
      }

      if (req.user.id === video.userId) {
        const updateVideo = await Video.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updateVideo);
      } else {
        return next(
          CustomErrorHandler.badRequest("You can update only your video")
        );
      }
    } catch (error) {
      return next(error);
    }
  },

  async deleteVideo(req, res, next) {
    try {
      const video = await Video.findById(req.params.id);

      if (!video) {
        return next(CustomErrorHandler.notFound("Video not found"));
      }

      if (req.user.id === video.userId) {
        await Video.findByIdAndDelete(req.params.id);
        res.status(200).json("The video has been deleted");
      } else {
        return next(
          CustomErrorHandler.badRequest("You can delete only your video!")
        );
      }
    } catch (error) {
      return next(error);
    }
  },
  async getVideo(req, res, next) {
    try {
      const video = await Video.findById(req.params.id);

      res.status(200).json(video);
    } catch (error) {
      return next(error);
    }
  },

  async addViewOnVideo(req, res, next) {
    try {
      // when the user refresh the page or first click the video to watch the video then increase the views quantity
      await Video.findByIdAndUpdate(req.params.id, {
        $inc: {
          views: 1,
        },
      });

      res.status(200).json("The view has been increased.");
    } catch (error) {
      return next(error);
    }
  },

  async randomVideos(req, res, next) {
    try {
      //         What does aggregate return in MongoDB?
      // aggregate() method returns a cursor to the documents produced by the final stage of the aggregation pipeline operation, or if you include the explain option, the document that provides details on the processing of the aggregation -- সমষ্টি operation.

      // aggregate() method muloto somosti return kore er moddhe pipline define kore dite pari tar upor depend kore data er somosti return korbe

      //$ample: Randomly selects the specified number of documents from the input documents.
      const videos = await Video.aggregate([
        {
          // size er upor depend kore $sample method random documents return korbe
          $sample: {
            size: 40,
          },
        },
      ]);

      res.status(200).json(videos);
    } catch (error) {
      return next(error);
    }
  },

  async trendVideos(req, res, next) {
    try {
      // get the latest videos
      const videos = await Video.find().sort({
        views: -1,
      });

      res.status(200).json(videos);
    } catch (error) {
      return next(error);
    }
  },

  async subscribedVideos(req, res, next) {
    try {
      const user = await User.findById(req.user.id);

      const subscribedChannels = user.subscribedUsers;

      const list = await Promise.all(
        subscribedChannels.map(async (channelId) => {
          return await Video.find({
            userId: channelId,
          });
        })
      );

      res
        .status(200)
        .json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    } catch (error) {
      return next(error);
    }
  },

  async getByTag(req, res, next) {
    // http://localhost:5000/api/videos/tags?tags=js, react
    // console.log(req.query);
    const tags = req.query.tags.split(",");
    try {
      const videos = await Video.find({
        // The $in operator selects the documents where the value of a field equals any value in the specified array
        tags: {
          $in: tags,
        },
      }).limit(20);

      res.status(200).json(videos);
    } catch (error) {
      return next(error);
    }
  },

  async searchVideos(req, res, next) {
    // http://localhost:5000/api/videos/search?q=p
    const query = req.query.q;

    try {
      const videos = await Video.find({
        title: {
          // $regex - Provides regular expression capabilities for pattern matching strings in queries

          // $options: In MongoDB, the following <options> are available for use with regular expression: i: To match both lower case and upper case pattern in the string. m: To include ^ and $ in the pattern in the match i.e. to specifically search for ^ and $ inside the string
          $regex: query,
          $options: "i",
        },
      }).limit(40);

      res.status(200).json(videos);
    } catch (error) {
      return next(error);
    }
  },
};

export default videoController;
