const express = require("express");
const router = express.Router();
const Sentiment = require("../models/Sentiment");
const verifyToken = require("../middleware/verifyToken");
console.log(" NEW sentimentRoutes loaded");
// ==============================
// GET all sentiments
// ==============================
router.get("/", verifyToken, async (req, res) => {
  try {
    const sentiments = await Sentiment.find().sort({ createdAt: -1 });

    res.status(200).json(sentiments);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==============================
// POST new sentiment
// ==============================
router.post("/", verifyToken, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required",
      });
    }

    let sentiment = "neutral";
    let improvement = "";

    const review = text.toLowerCase();

    if (
      review.includes("dirty") ||
      review.includes("bad") ||
      review.includes("terrible")
    ) {
      sentiment = "negative";
      improvement =
        "Improve cleanliness, maintenance and customer service.";
    } else if (
      review.includes("clean") ||
      review.includes("excellent") ||
      review.includes("friendly")
    ) {
      sentiment = "positive";
      improvement =
        "Keep maintaining the same quality of service.";
    }

    const newSentiment = await Sentiment.create({
      text,
      sentiment,
      improvement,
    });

    res.status(200).json(newSentiment);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==============================
// GET sentiment by ID
// ==============================
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const sentiment = await Sentiment.findById(req.params.id);

    if (!sentiment) {
      return res.status(404).json({
        success: false,
        message: "Sentiment not found",
      });
    }

    res.status(200).json(sentiment);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==============================
// UPDATE sentiment
// ==============================
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const { text, sentiment } = req.body;

    const updatedSentiment = await Sentiment.findByIdAndUpdate(
      req.params.id,
      {
        text,
        sentiment,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedSentiment) {
      return res.status(404).json({
        success: false,
        message: "Sentiment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Sentiment updated",
      data: updatedSentiment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==============================
// DELETE sentiment
// ==============================
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deletedSentiment = await Sentiment.findByIdAndDelete(req.params.id);

    if (!deletedSentiment) {
      return res.status(404).json({
        success: false,
        message: "Sentiment not found",
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;