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
          description="Detect whether reviews are positive, negative, or neutral"
        />
        <Card 
          title="AI Suggestions"
          description="Get smart AI-generated responses for customer feedback"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;