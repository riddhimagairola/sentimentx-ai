import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <h1 className="text-3xl font-bold text-center text-blue-600 mt-6">
        SentimentX AI Dashboard 
      </h1>

      <p className="text-center text-gray-600 mt-2">
        Analyze customer reviews using AI-powered insights
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        <Card
          title="Sentiment Analysis"
          description="Analyze reviews and classify sentiment as positive, negative, or neutral using AI"
        />

        <Card
          title="AI Suggestions"
          description="Get smart AI-generated responses for customer feedback and improve performance"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;