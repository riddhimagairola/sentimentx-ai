const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// ===========================
// LOAD ENV FIRST
// ===========================
dotenv.config();
console.log(process.env.GEMINI_API_KEY);
const mongoose = require("mongoose");
const dns = require("node:dns");
const rateLimit = require("express-rate-limit");
const passport = require("passport");
const session = require("express-session");

// Passport Config
require("./config/passport");

// ===========================
// IMPORT ROUTES
// ===========================
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const sentimentRoutes = require("./routes/sentimentRoutes");
const googleAuthRoutes = require("./routes/googleAuthRoutes");
const aiRoutes = require("./routes/aiRoutes");

// ===========================
// IMPORT MIDDLEWARE
// ===========================
const errorHandler = require("./middleware/errorHandler");

const app = express();

// ===========================
// DEBUG
// ===========================
console.log("CLIENT:", process.env.GOOGLE_CLIENT_ID);

// Force Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// ===========================
// RATE LIMITER
// ===========================
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many authentication attempts. Please try again after 15 minutes.",
  },
});

// ===========================
// MONGODB
// ===========================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ===========================
// MIDDLEWARE
// ===========================
app.use(cors());

app.use(express.json());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ===========================
// HOME ROUTE
// ===========================
app.get("/", (req, res) => {
  res.send(" SentimentX Backend is Running!");
});

// ===========================
// API ROUTES
// ===========================
app.use("/api/auth", authLimiter, authRoutes);

app.use("/api/sentiments", sentimentRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/ai", aiRoutes);

app.use("/auth", googleAuthRoutes);

// ===========================
// ERROR HANDLER
// ===========================
app.use(errorHandler);

// ===========================
// START SERVER
// ===========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});