import express from "express";
import authRoutes from "./routes/auth.route.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user.roue.js";
import todoRoute from "./routes/todo.route.js";
const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", authRoutes);
app.use("/api", userRoute);
app.use("/api", todoRoute);
