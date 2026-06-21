import { Link } from "react-router-dom";
import { useState } from "react";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import showToast from "../components/ui/Toast";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!email || !password) {
      showToast("Please fill all fields ❌");
      return;
    }

    showToast("Logged in successfully ✅");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">

      {/* Center Box */}
      <div className="flex-1 flex items-center justify-center px-4">

        <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-300 mt-2">
            Login to access SentimentX AI dashboard
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">

            <Input
              label="Email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button className="w-full">
              Login
            </Button>

          </form>

          {/* Links */}
          <div className="flex justify-center gap-6 mt-6 text-sm text-blue-600 dark:text-blue-400">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          </div>

          {/* Signup */}
          <p className="text-sm text-center text-gray-500 dark:text-gray-300 mt-6">
            Don’t have an account?{" "}
            <span className="text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
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