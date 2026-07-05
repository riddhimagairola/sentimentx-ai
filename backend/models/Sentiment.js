const mongoose = require("mongoose");

const sentimentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    sentiment: {
      type: String,
      enum: ["positive", "negative", "neutral"],
      required: true,
    },
    improvement: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sentiment", sentimentSchema);