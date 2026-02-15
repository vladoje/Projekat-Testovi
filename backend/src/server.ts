import dotenv from "dotenv";
import path from "path";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { query } from "./db/db";
import authRoutes from "./routes/auth";
import testRoutes from "./routes/test";
import userRoutes from "./routes/user";
import { authenticate } from "./middleware/authMidleware";

// Load .env
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", authRoutes);
app.use("/test", authenticate, testRoutes);
app.use("/user", authenticate, userRoutes);

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
