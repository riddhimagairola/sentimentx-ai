const express = require("express");
const router = express.Router();

const Sentiment = require("../models/Sentiment");
const verifyToken = require("../middleware/verifyToken");

// ==============================
// USER-SPECIFIC DASHBOARD STATS
// ==============================

router.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const totalAnalyses = await Sentiment.countDocuments({
      user: userId,
    });

    const positive = await Sentiment.countDocuments({
      user: userId,
      sentiment: "positive",
    });

    const negative = await Sentiment.countDocuments({
      user: userId,
      sentiment: "negative",
    });

    const neutral = await Sentiment.countDocuments({
      user: userId,
      sentiment: "neutral",
    });

    res.status(200).json({
      totalAnalyses,
      positive,
      negative,
      neutral,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;