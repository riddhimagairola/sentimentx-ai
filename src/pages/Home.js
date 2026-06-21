import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-300">

      {/* Hero Section */}
      <Hero />

      {/* Stats / Highlight Section */}
      <div className="text-center mt-14 px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Powering AI-Powered Sentiment Insights
        </h1>

        <p className="text-gray-500 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
          SentimentX helps businesses analyze customer feedback, detect emotions,
          and generate actionable AI insights instantly.
        </p>
      </div>

      {/* Feature Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 px-6">

        <Card
          title="Sentiment Analysis"
          description="Automatically classify customer feedback into positive, negative, or neutral sentiment using AI models."
        />

        <Card
          title="AI Suggestions"
          description="Generate intelligent replies and recommendations based on customer feedback patterns."
        />

        <Card
          title="Real-time Insights"
          description="Track sentiment trends and analytics in real-time dashboards for better decision-making."
        />

      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-16 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Start analyzing smarter today 🚀
        </h2>

        <p className="text-gray-500 dark:text-gray-300 mt-2">
          Upgrade customer experience with AI-powered feedback analysis.
        </p>

        
      </div>

      <Footer />
    </div>
  );
}

export default Home;