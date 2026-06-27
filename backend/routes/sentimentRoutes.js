const express = require("express");
const router = express.Router();

let sentiments = [
  {
    id: 1,
    text: "I love this product!",
    sentiment: "Positive",
  },
];

// GET all sentiments
router.get("/", (req, res) => {
  res.status(200).json(sentiments);
});

// POST new sentiment
router.post("/", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      message: "Text is required",
    });
  }

  const newSentiment = {
    id: sentiments.length + 1,
    text,
    sentiment: "Positive",
  };

  sentiments.push(newSentiment);

  res.status(201).json(newSentiment);
});

module.exports = router;