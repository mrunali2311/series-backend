  import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import seriesRoutes from "./routes/seriesRoutes.js";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/series", seriesRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
