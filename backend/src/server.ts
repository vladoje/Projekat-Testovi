import dotenv from "dotenv";
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import { query } from "./db/db";
import authRoutes from "./routes/auth";
import testRoutes from "./routes/test";
import userRoutes from "./routes/user";
import { authMiddleware } from "./middleware/authMidleware";
const cors = require("cors");
// Load .env
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // origin FE
    credentials: true, // dozvoljava cookies
  }),
);
// Routes
app.use("/auth", authRoutes);
app.use("/test", authMiddleware, testRoutes);
app.use("/user", authMiddleware, userRoutes);

const startServer = async () => {
  try {
    await query("SELECT 1"); // test connection
    console.log("✅ Connected to PostgreSQL");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed", error);
    process.exit(1);
  }
};

startServer();
