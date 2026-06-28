import { useState, useEffect } from "react";

import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import showToast from "../components/ui/Toast";
import Loader from "../components/ui/Loader";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //  Backend state
  const [stats, setStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [error, setError] = useState("");

  //  Fetch dashboard data
  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoadingStats(false);
      })
      .catch(() => {
        setError("Failed to load dashboard stats");
        setLoadingStats(false);
      });
  }, []);

  const handleAction = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showToast("Dashboard action completed 🚀");
    }, 1000);
  };

  //  Loader screen
  if (loadingStats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 p-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Live system insights and analytics
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-red-500 mt-2 text-sm">{error}</p>
      )}

      {/* ACTION BAR */}
      <div className="mt-4 flex gap-3">
        <Button onClick={handleAction}>
          Run Quick Action
        </Button>

        <Button onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
      </div>

      {/* CONTENT */}
      <div className="flex-1">

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">Total Analyses</p>
            <p className="text-xl font-bold">
              {stats?.totalAnalyses}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">Positive</p>
            <p className="text-xl font-bold text-green-500">
              {stats?.positive}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">Negative</p>
            <p className="text-xl font-bold text-red-500">
              {stats?.negative}
            </p>
          </div>

        </div>

        {/* LOADER DEMO */}
        {loading && (
          <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <Loader />
          </div>
        )}

        {/* CHART */}
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
            Sentiment Trend
          </h2>
          <div className="h-40 flex items-center justify-center text-gray-500">
            📊 Chart Placeholder (connect later with Recharts)
          </div>
        </div>

        {/* ACTIVITY */}
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
            Recent Activity
          </h2>

          <p className="text-sm text-gray-500">
            • User review analyzed → Positive
          </p>
          <p className="text-sm text-gray-500">
            • System updated sentiment model
          </p>
        </div>

      </div>

      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-bold">Quick Dashboard Modal</h2>
        <p className="text-gray-500 mt-2">
          This shows reusable Modal component working.
        </p>
      </Modal>

      {/* FOOTER */}
      <div className="mt-auto">
        <Footer />
      </div>

    </div>
  );
}

export default Dashboard;