import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// database connection
connectDB();

// routes here
app.use(cookieParser());
app.use(express.json());
app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
