const mongoose = require("mongoose");

const sentimentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    sentiment: {
      type: String,
      enum: ["positive", "negative", "neutral"],
      default: "neutral",
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