const express = require("express");
const router = express.Router();
const Sentiment = require("../models/Sentiment");

router.get("/", async (req, res) => {
  try {
    const totalAnalyses = await Sentiment.countDocuments();

    const positive = await Sentiment.countDocuments({
      sentiment: "positive",
    });

    const negative = await Sentiment.countDocuments({
      sentiment: "negative",
    });

    const neutral = await Sentiment.countDocuments({
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