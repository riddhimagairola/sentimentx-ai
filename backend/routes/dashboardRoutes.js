const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    totalAnalyses: 18,
    positive: 11,
    negative: 4,
    neutral: 3,
  });
});

module.exports = router;