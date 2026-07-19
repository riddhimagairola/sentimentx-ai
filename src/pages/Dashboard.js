import { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";
import Footer from "../components/Footer";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        // Dashboard Stats
        const statsRes = await fetch(
        "http://localhost:5000/api/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        const statsData = await statsRes.json();

        // Protected Sentiments API
        const reviewsRes = await fetch(
          "http://localhost:5000/api/sentiments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Token expired or invalid
        if (reviewsRes.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
          return;
        }

        const reviewsData = await reviewsRes.json();

        setStats(statsData);
        setRecent(Array.isArray(reviewsData) ? reviewsData.slice(0, 5) : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Monitor your homestay reviews and customer sentiment.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <p className="text-gray-500 text-sm">Total Reviews</p>
          <h2 className="text-4xl font-bold mt-3">
            {stats?.totalAnalyses || 0}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <p className="text-gray-500 text-sm">Positive</p>
          <h2 className="text-4xl font-bold mt-3 text-green-500">
            {stats?.positive || 0}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <p className="text-gray-500 text-sm">Negative</p>
          <h2 className="text-4xl font-bold mt-3 text-red-500">
            {stats?.negative || 0}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <p className="text-gray-500 text-sm">Neutral</p>
          <h2 className="text-4xl font-bold mt-3 text-gray-500">
            {stats?.neutral || 0}
          </h2>
        </div>

      </div>

      {/* RECENT REVIEWS */}
      <div className="mt-10">

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
          Recent Reviews
        </h2>

        <div className="space-y-5">

          {recent.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5"
            >

              <p className="text-gray-800 dark:text-white text-lg">
                {item.text}
              </p>

              <span
                className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
                  item.sentiment === "positive"
                    ? "bg-green-100 text-green-700"
                    : item.sentiment === "negative"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {item.sentiment}
              </span>

              {item.improvement && (
                <div className="mt-4 bg-blue-50 dark:bg-gray-700 rounded-xl p-4">

                  <p className="text-blue-700 dark:text-blue-300 font-medium">
                    Suggested Improvement
                  </p>

                  <p className="mt-1 text-gray-700 dark:text-gray-300">
                    {item.improvement}
                  </p>

                </div>
              )}

              <p className="text-xs text-gray-500 mt-4">
                {new Date(item.createdAt).toLocaleString()}
              </p>

            </div>
          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Dashboard;