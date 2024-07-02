import express from "express";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import UserRoutes from "./routes/UserRoutes.js"
dotenv.config();

connectDB()

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome in React-Native FullStack App",
  });
});

app.use("/api/v1/auth", UserRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on ${process.env.PORT}`.bgBlack.green);
});
