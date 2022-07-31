import Joi from "joi";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import CustomErrorHandler from "../services/CustomErrorHandler.js";
import { generateToken } from "../config/genterateToken.js";

const authController = {
  async signup(req, res, next) {
    const signupSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeat_password: Joi.ref("password"),
      subscribedUsers: Joi.array().items(Joi.string()),
    });

    const { error } = signupSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    // check if user is in the database already
    try {
      // here useing the user model
      const exist = await User.exists({ email: req.body.email });

      if (exist) {
        // here need to custom error send to the client side
        return next(
          CustomErrorHandler.alreadyExist("This email is already taken")
        );
      }
    } catch (err) {
      return next(err);
    }

    try {
      // destructuring object
      const { name, email, password } = req.body;

      if (password?.length < 6) {
        return next(
          CustomErrorHandler.badRequest(
            "Password must be at least 6 charactor."
          )
        );
      }
      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // prepare the model to store user data on databse
      const newUser = new User({ name, email, password: hashedPassword });

      await newUser.save();
      res.status(201).json({ message: "User has been created Successfully!" });
    } catch (err) {
      return next(err);
    }
  },

  async signin(req, res, next) {
    console.log(req.body);
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user)
        return next(
          CustomErrorHandler.badRequest("This account does not exits.")
        );

      // if user exists
      const isMatch = bcrypt.compare(req.body.password, user.password);

      if (!isMatch) {
        return next(
          CustomErrorHandler.badRequest("Username or passowrd is wrong!")
        );
      }

      const token = generateToken({ id: user._id });
      const { password, ...others } = user._doc;

      res
        .cookie(String(user._id), token, {
          path: "/",
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
          httpOnly: true,
          sameSite: "lax",
        })
        .status(200)
        .json({
          message: "Successfully Logged In",
          ...others,
        });
    } catch (err) {
      return next(err);
    }
  },

  async googleAuth(req, res, next) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });

      if (user) {
        const token = generateToken({ id: user._id });

        res
          .cookie(String(user._id), token, {
            path: "/",
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
            httpOnly: true,
            sameSite: "lax",
          })
          .status(200)
          .json({
            message: "Successfully Logged In",
            ...user._doc,
          });
      } else {
        const newUser = new User({
          ...req.body,
          fromGoogle: true,
        });

        const savedUser = await newUser.save();
        const token = generateToken({ id: user._id });

        res
          .cookie(String(user._id), token, {
            path: "/",
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
            httpOnly: true,
            sameSite: "lax",
          })
          .status(200)
          .json({
            message: "Successfully Logged In",
            ...savedUser._doc,
          });
      }
    } catch (error) {
      return next(error);
    }
  },
};

export default authController;
