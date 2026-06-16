import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <Navbar />

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center px-4">

        <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-200">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Login to access your SentimentX dashboard
          </p>

          {/* Form */}
          <form className="mt-8 space-y-4">

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>

          </form>

          {/* Navigation Links */}
          <div className="flex justify-center gap-6 mt-6 text-sm text-blue-600">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          </div>

          {/* Footer text */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;