import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import videosRoutes from "./routes/videoRoutes.js";
import commentsRoutes from "./routes/commentRoutes.js";
// import path from "path";

dotenv.config();

const app = express();

// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
// const __dirname = path.dirname(__filename);

// database connection
connectDB();

// routes here
app.use(cookieParser());
app.use(express.json());
// auth routes
app.use("/api/auth", authRoutes);
// users routes
app.use("/api/users", usersRoutes);
app.use("/api/videos", videosRoutes);
app.use("/api/comments", commentsRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
