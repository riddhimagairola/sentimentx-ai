const express = require("express");
const router = express.Router();

const { GoogleGenAI } = require("@google/genai");
const verifyToken = require("../middleware/verifyToken");
console.log("GEMINI KEY:", process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/analyze", verifyToken, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required",
      });
    }

    const prompt = `
You are a sentiment analysis assistant.

Analyze the following customer review.

Return ONLY valid JSON in this format:

{
  "sentiment":"positive/negative/neutral",
  "improvement":"one short suggestion"
}

Review:
${text}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    let output = response.text.trim();

    // Remove markdown code fences if Gemini returns them
    output = output.replace(/```json/g, "").replace(/```/g, "").trim();

    const result = JSON.parse(output);

    res.json(result);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "AI request failed",
    });
  }
});

module.exports = router;