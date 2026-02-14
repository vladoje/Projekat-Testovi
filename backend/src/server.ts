import dotenv from "dotenv";
import path from "path";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { query } from "./db/db";
import authRoutes from "./routes/auth";
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

// Health check
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK" });
});

// Example protected route
app.get("/protected", authenticate, (req: Request, res: Response) => {
  res.send({ message: "You are logged in!", userId: (req as any).userId });
});

// Start server with DB connection check
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
