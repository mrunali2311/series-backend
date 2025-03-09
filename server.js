 const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || "your-mongodb-connection-string-here";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Default Route
app.get("/", (req, res) => {
  res.send("Server is running! Welcome to Series Backend.");
});

// Sample API Route
app.get("/api/series", (req, res) => {
  res.json({ message: "List of series will be here." });
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
