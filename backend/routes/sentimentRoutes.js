const express = require("express");
const router = express.Router();

const Sentiment = require("../models/Sentiment");
const verifyToken = require("../middleware/verifyToken");

// ==============================
// GET ALL SENTIMENTS OF LOGGED USER
// ==============================

router.get("/", verifyToken, async (req, res) => {
  try {
    const sentiments = await Sentiment.find({
      user: req.user.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json(sentiments);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==============================
// CREATE SENTIMENT
// ==============================

router.post("/", verifyToken, async (req, res) => {
  try {
    const { text, sentiment, improvement } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required",
      });
    }

    const newSentiment = await Sentiment.create({
      user: req.user.userId,
      text,
      sentiment: sentiment || "neutral",
      improvement: improvement || "",
    });

    res.status(201).json(newSentiment);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
// ==============================
// UPDATE
// ==============================

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updated = await Sentiment.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.userId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Sentiment not found",
      });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==============================
// DELETE
// ==============================

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await Sentiment.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!deleted) {
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