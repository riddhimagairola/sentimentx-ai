const express = require("express");
const router = express.Router();

let sentiments = [
  {
    id: 1,
    text: "I love this product!",
    sentiment: "positive",
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
    sentiment: "positive",
  };

  sentiments.push(newSentiment);

  res.status(201).json(newSentiment);
});

// GET sentiment by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const sentiment = sentiments.find((item) => item.id === id);

  if (!sentiment) {
    return res.status(404).json({
      success: false,
      message: "Sentiment not found",
    });
  }

  res.status(200).json(sentiment);
});

// UPDATE sentiment
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { text, sentiment } = req.body;

  const index = sentiments.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Sentiment not found",
    });
  }

  sentiments[index] = {
    ...sentiments[index],
    text,
    sentiment,
  };

  res.status(200).json({
    success: true,
    message: "Sentiment updated",
    data: sentiments[index],
  });
});

// DELETE sentiment
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = sentiments.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Sentiment not found",
    });
  }

  sentiments.splice(index, 1);

  res.status(204).send();
});

module.exports = router;