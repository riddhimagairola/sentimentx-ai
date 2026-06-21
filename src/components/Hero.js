import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-20 px-4 bg-white dark:bg-slate-900">

      <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
        Understand Customer Sentiment with AI
      </h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        SentimentX uses AI to analyze reviews, detect emotions, and generate smart insights
        to improve business decisions.
      </p>

      <button
        onClick={() => navigate("/ai")}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get Started
      </button>

    </div>
  );
}