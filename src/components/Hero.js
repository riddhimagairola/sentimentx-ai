function Hero() {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50">
      <h2 className="text-5xl font-bold text-gray-800">
        Understand Customer Sentiment with AI
      </h2>

      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        SentimentX uses AI to analyze reviews, detect emotions, and generate smart insights to improve business decisions.
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
}

export default Hero;