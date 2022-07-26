import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.MONGODB_URL;

const connectDB = () => {
  try {
    mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection fail");
  }
};

export default connectDB;
