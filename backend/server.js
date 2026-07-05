const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dns = require("node:dns");
console.log("Loading sentiment routes...");

const sentimentRoutes = require("./routes/sentimentRoutes");

console.log("Sentiment routes loaded");

// Force Google DNS instead of system DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Load environment variables
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Import Routes
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// Import Middleware
const errorHandler = require("./middleware/errorHandler");

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 SentimentX Backend is Running!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/sentiments", sentimentRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Error Handler (Always Last)
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});