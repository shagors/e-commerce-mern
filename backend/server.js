import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`);
});
