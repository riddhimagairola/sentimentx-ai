import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Sentiments from "./pages/Sentiments";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AIFeature from "./pages/AIFeature"; // 
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <BrowserRouter>

        <Navbar />
        <Toaster />

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/ai"
  element={
    <ProtectedRoute>
      <AIFeature />
    </ProtectedRoute>
  }
/>

<Route
  path="/sentiments"
  element={
    <ProtectedRoute>
      <Sentiments />
    </ProtectedRoute>
  }
/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;