import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md">

      {/* Logo */}
      <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
        SentimentX
      </h2>

      {/* Links */}
      <div className="flex items-center gap-6 font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 dark:text-blue-400 font-semibold"
              : "text-slate-600 dark:text-slate-200 hover:text-blue-500"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 dark:text-blue-400 font-semibold"
              : "text-slate-600 dark:text-slate-200 hover:text-blue-500"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/sentiments"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 dark:text-blue-400 font-semibold"
              : "text-slate-600 dark:text-slate-200 hover:text-blue-500"
          }
        >
          Sentiments
        </NavLink>

        <NavLink
          to="/ai"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 dark:text-blue-400 font-semibold"
              : "text-slate-600 dark:text-slate-200 hover:text-blue-500"
          }
        >
          AI Feature
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 dark:text-blue-400 font-semibold"
              : "text-slate-600 dark:text-slate-200 hover:text-blue-500"
          }
        >
          About
        </NavLink>

        {!token ? (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-slate-600 dark:text-slate-200 hover:text-blue-500"
            }
          >
            Login
          </NavLink>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
          >
            Logout
          </button>
        )}

        <div className="ml-2 pl-4 border-l border-slate-300 dark:border-slate-700">
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}