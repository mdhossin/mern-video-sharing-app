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
      res.status(201).json("User has been created Successfully!");
    } catch (err) {
      return next(err);
    }
  },

  async signin(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user)
        return next(
          CustomErrorHandler.badRequest("This account does not exits.")
        );

      // if user exists
      const isMatch = await bcrypt.compare(req.body.password, user.password);

      if (!isMatch) {
        return next(
          CustomErrorHandler.badRequest("Username or passowrd is wrong!")
        );
      }

      const token = generateToken({ id: user._id });
      const { password, ...others } = user._doc;

      res
        .cookie("access_token", token, {
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
        })
        .status(200)
        .json(others);
    } catch (err) {
      return next(err);
    }
  },
};

export default authController;
