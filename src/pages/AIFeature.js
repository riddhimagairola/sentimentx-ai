import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function AIFeature() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const analyzeText = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/sentiments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      if (res.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
        return;
      }

      if (!res.ok) {
        throw new Error("Failed");
      }

      await res.json();

      setText("");

      navigate("/sentiments");

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        AI Sentiment Analysis
      </h1>

      <p className="text-gray-500 dark:text-gray-400 mt-1">
        Paste your customer review below and save its sentiment.
      </p>

      <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter customer review..."
          className="w-full h-40 p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
        />

        <div className="mt-3 flex justify-end">
          <Button onClick={analyzeText} disabled={loading}>
            {loading ? "Saving..." : "Save Sentiment"}
          </Button>
        </div>

      </div>

    </div>
  );
}