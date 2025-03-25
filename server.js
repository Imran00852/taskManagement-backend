import express from "express";
import { config } from "dotenv";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
const app = express();

config();
connectDB();

//cookie parser
app.use(cookieParser());

//cors
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//parse json data
app.use(express.json());

//api's
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

//home route
app.get("/", (req, res) => {
  res.json({
    message: "Home Route",
  });
});

//connection to server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

//error middleware
app.use(errorMiddleware);
