import CustomErrorHandler from "../services/CustomErrorHandler.js";
import dotenv from "dotenv";
dotenv.config();
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      return next(CustomErrorHandler.unAuthorized());
    }

    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);

    if (!decoded) {
      return next(CustomErrorHandler.unAuthorized());
    }

    const user = await User.findOne({ _id: decoded.id }).select("-password");

    if (!user) {
      return next(CustomErrorHandler.badRequest("User does not exist"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(error);
  }
};

export default auth;
