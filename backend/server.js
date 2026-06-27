const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Import Routes
const authRoutes = require("./routes/authRoutes");
const sentimentRoutes = require("./routes/sentimentRoutes");
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