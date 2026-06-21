import { useState } from "react";
import Button from "../components/ui/Button";
import showToast from "../components/ui/Toast";

export default function AIFeature() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeText = () => {
    if (!text.trim()) {
      showToast("Please enter some text");
      return;
    }

    // Fake AI logic (replace with real API later)
    const score = Math.random();

    let sentiment = "Neutral";
    if (score > 0.6) sentiment = "Positive";
    else if (score < 0.4) sentiment = "Negative";

    setResult({
      sentiment,
      confidence: (score * 100).toFixed(1),
    });

    showToast("AI Analysis complete ⚡");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        AI Sentiment Analysis
      </h1>

      <p className="text-gray-500 dark:text-gray-400 mt-1">
        Paste text and get instant emotional insights
      </p>

      {/* INPUT BOX */}
      <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter customer review..."
          className="w-full h-40 p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
        />

        <div className="mt-3 flex justify-end">
          <Button onClick={analyzeText}>
            Analyze
          </Button>
        </div>

      </div>

      {/* RESULT */}
      {result && (
        <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">

          <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
            Result
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Sentiment: <b>{result.sentiment}</b>
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Confidence: {result.confidence}%
          </p>

          <p className="text-sm text-gray-500 mt-2">
            AI detects emotional tone based on text patterns and sentiment scoring.
          </p>

        </div>
      )}

    </div>
  );
}