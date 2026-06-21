import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-black text-black dark:text-white">

      {/* HERO SECTION */}
      <div className="flex-1 px-6 py-12">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-4">
            About SentimentX AI
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            SentimentX AI is an intelligent platform designed to analyze user-generated text
            and extract meaningful emotional insights using advanced AI-based sentiment analysis.
          </p>

          {/* CORE IDEA BOX */}
          <div className="mt-8 p-6 rounded-2xl bg-white/70 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              What this platform does
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              It helps users understand the emotional tone behind text such as reviews,
              feedback, and comments — and transforms raw data into actionable insights
              using AI models.
            </p>
          </div>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow">
              <h3 className="font-semibold">AI Sentiment Analysis</h3>
              <p className="text-sm text-gray-500 mt-2">
                Detects positive, negative, and neutral emotions from text.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow">
              <h3 className="font-semibold">Smart Dashboard</h3>
              <p className="text-sm text-gray-500 mt-2">
                Visualizes insights through interactive analytics and stats.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow">
              <h3 className="font-semibold">Real-time Insights</h3>
              <p className="text-sm text-gray-500 mt-2">
                Provides instant feedback and AI-driven interpretation.
              </p>
            </div>

          </div>

          {/* WHY IT MATTERS */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-2">
              Why SentimentX AI?
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              In today’s digital world, understanding user feedback is critical.
              SentimentX AI converts unstructured text into meaningful insights
              that help improve decision-making, product experience, and user satisfaction.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;