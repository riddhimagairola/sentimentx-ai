import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // ===========================
  // GOOGLE LOGIN SUCCESS
  // ===========================

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);

      toast.success("Google Login Successful ");

      navigate("/dashboard");
    }
  }, [location, navigate]);

  // ===========================
  // LOGIN / REGISTER
  // ===========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields ");
      return;
    }

    try {
      setLoading(true);

      const endpoint = isRegister
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const response = await fetch(endpoint, {
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
        toast.error(data.message || "Something went wrong ");
        return;
      }

      // REGISTER

      if (isRegister) {
        toast.success("Account Created Successfully ");

        setEmail("");
        setPassword("");

        setIsRegister(false);

        return;
      }

      // LOGIN

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login Successful ");

      navigate("/dashboard");

    } catch (err) {
      console.error(err);

      toast.error("Server Error ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">

      <div className="flex-1 flex items-center justify-center px-4">

        <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700">

          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            {isRegister ? "Create Account" : "Welcome Back"}
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-300 mt-2">
            {isRegister
              ? "Create your SentimentX account"
              : "Login to access SentimentX AI Dashboard"}
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
              placeholder={
                isRegister ? "Create Password" : "Enter Password"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? isRegister
                  ? "Creating Account..."
                  : "Logging in..."
                : isRegister
                ? "Create Account"
                : "Login"}
            </Button>

          </form>

          {/* GOOGLE LOGIN */}

          <div className="my-6 flex items-center">
            <div className="flex-1 border-b"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-b"></div>
          </div>

          <button
            onClick={() =>
              (window.location.href =
                "http://localhost:5000/auth/google")
            }
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />

            Continue with Google
          </button>

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

            {isRegister
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister);
                setEmail("");
                setPassword("");
              }}
              className="ml-1 text-blue-600 hover:underline font-medium"
            >
              {isRegister ? "Login" : "Register"}
            </button>

          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Login;