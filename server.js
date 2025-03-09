  import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import seriesRoutes from "./routes/seriesRoutes.js";

dotenv.config(); // Load environment variables before using them

const mongoURI = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;
const PORT = process.env.PORT || 5000; // Make sure PORT is correctly used

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/series", seriesRoutes);

// Database Connection
connectDB();

app.listen(PORT, () => console.log(`Server running on
