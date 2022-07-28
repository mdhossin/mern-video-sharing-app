import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

dotenv.config();

const app = express();

// database connection
connectDB();

// routes here
app.use(cookieParser());
app.use(express.json());
// auth routes
app.use("/api", authRoutes);
// users routes
app.use("/api", usersRoutes);

const PORT = process.env.PORT || 5000;

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
