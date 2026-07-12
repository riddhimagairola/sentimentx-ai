import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields ❌");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Login failed ");
        return;
      }

      // Save JWT
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login Successful ");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      showToast("Server Error ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">

      <div className="flex-1 flex items-center justify-center px-4">

        <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700">

          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-300 mt-2">
            Login to access SentimentX AI Dashboard
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">

            <Input
              label="Email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

          </form>

          <div className="flex justify-center gap-6 mt-6 text-sm">
            <Link
              to="/"
              className="text-blue-600 hover:underline"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-blue-600 hover:underline"
            >
              About
            </Link>
          </div>

          <p className="text-center text-gray-500 dark:text-gray-300 mt-6 text-sm">
            Don't have an account?
            <span className="text-blue-600 cursor-pointer ml-1">
              Register
            </span>
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Login;