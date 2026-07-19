import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function AIFeature() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const analyzeText = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const token = localStorage.getItem("token");

      // ==========================
      // STEP 1 - Gemini Analysis
      // ==========================

      const aiRes = await fetch("http://localhost:5000/api/ai/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          text,
        }),
      });

      if (aiRes.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
        return;
      }

      if (!aiRes.ok) {
        throw new Error("AI Analysis Failed");
      }

      const data = await aiRes.json();

      // Show AI Result
      setResult(data);

      // ==========================
      // STEP 2 - Save to MongoDB
      // ==========================

      const saveRes = await fetch(
        "http://localhost:5000/api/sentiments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            text,
            sentiment: data.sentiment,
            improvement: data.improvement,
          }),
        }
      );

      if (!saveRes.ok) {
        throw new Error("Failed to save sentiment");
      }

      // Optional delay so user sees result for 1 second
      setTimeout(() => {
        navigate("/sentiments");
      }, 1000);

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">

      <h1 className="text-3xl font-bold dark:text-white">
        AI Sentiment Analysis
      </h1>

      <p className="text-gray-500 mt-2">
        Enter a customer review and let Gemini analyze it.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 mt-6">

        <textarea
          className="w-full h-40 border rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700"
          placeholder="Enter customer review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="mt-4 flex justify-end">

          <Button
            onClick={analyzeText}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze with AI"}
          </Button>

        </div>

      </div>

      {result && (

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow p-6">

          <h2 className="text-xl font-bold dark:text-white">
            AI Result
          </h2>

          <div className="mt-4">

            <p className="font-semibold">
              Sentiment:
            </p>

            <span
              className={`inline-block mt-2 px-4 py-2 rounded-full text-white ${
                result.sentiment === "positive"
                  ? "bg-green-500"
                  : result.sentiment === "negative"
                  ? "bg-red-500"
                  : "bg-gray-500"
              }`}
            >
              {result.sentiment}
            </span>

          </div>

          <div className="mt-6">

            <p className="font-semibold">
              Suggested Improvement
            </p>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {result.improvement}
            </p>

          </div>

        </div>

      )}

    </div>
  );
}