// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";

// ✅ Load environment variables BEFORE anything else
dotenv.config();

// ✅ Connect to MongoDB Atlas
connectDB();

const app = express();

// ✅ Basic middleware
app.use(
  cors({
    origin: ["http://localhost:5173"], // later we'll add your Vercel URL here
    credentials: true,
  })
);
app.use(express.json());

// ✅ Static files (public folder)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// ✅ API routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
