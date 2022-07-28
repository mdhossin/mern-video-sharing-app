import CustomErrorHandler from "../services/CustomErrorHandler.js";
import User from "../models/userModel.js";

const usersController = {
  async updateUser(req, res, next) {
    if (req.params.id === req.user.id) {
      try {
        const updateUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            // replace the new value come from frontend this thing do the $set medthod
            $set: req.body,
          },
          { new: true }
        ).select("-password");

        res.status(200).json(updateUser);
      } catch (err) {
        return next(err);
      }
    } else {
      return next(
        CustomErrorHandler.unAuthorized("You can update only your account!")
      );
    }
  },

  async deleteUser(req, res, next) {
    if (req.params.id === req.user.id) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (error) {
        return next(error);
      }
    } else {
      return next(
        CustomErrorHandler.badRequest("You can delete only your account!")
      );
    }
  },

  async getUser(req, res, next) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  },

  async subscribe(req, res, next) {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        // this is a push method like javascript push method is works to when the new user subscribe then user is push it
        $push: {
          subscribedUsers: req.params.id,
        },
      });

      await User.findByIdAndUpdate(req.params.id, {
        // inc mean hocche incremnet
        // per subscribe user increment one
        $inc: {
          subscribers: 1,
        },
      });

      res.status(200).json("Subscription successfull.");
    } catch (error) {
      return next(error);
    }
  },
};

export default usersController;
