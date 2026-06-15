import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
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