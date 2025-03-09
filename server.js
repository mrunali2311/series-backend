import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Default Route (Root URL)
app.get("/", (req, res) => {
    res.send("✅ Server is running, Welcome to Backend!");
});

// ✅ Example API Route for Series
app.get("/series", (req, res) => {
    res.json({ message: "📺 This is the Series API" });
});

// ✅ Example API Route for Users
app.get("/users", (req, res) => {
    res.json({ message: "👤 This is the Users API" });
});

// ✅ Start the Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
