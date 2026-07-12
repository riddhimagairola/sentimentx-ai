import { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";

function Sentiments() {
  const [sentiments, setSentiments] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // FETCH DATA
  const fetchSentiments = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/sentiments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
        return;
      }

      const data = await res.json();
      setSentiments(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
      setSentiments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSentiments();
  }, []);

  // DELETE SENTIMENT
  const deleteSentiment = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/sentiments/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
        return;
      }

      if (res.status === 204) {
        fetchSentiments();
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Sentiments
      </h1>

      {sentiments.length === 0 ? (
        <p className="text-gray-500">No sentiments found.</p>
      ) : (
        <div className="grid gap-4">

          {sentiments.map((item) => (

            <div
              key={item._id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex justify-between items-start"
            >

              <div className="flex-1">

                <p className="text-gray-800 dark:text-gray-100 text-base">
                  {item.text}
                </p>

                <span
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
                    item.sentiment?.toLowerCase() === "positive"
                      ? "bg-green-100 text-green-700"
                      : item.sentiment?.toLowerCase() === "negative"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.sentiment}
                </span>

                {item.improvement && (
                  <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-3 rounded-lg">

                    <p className="text-blue-700 dark:text-blue-300 font-semibold">
                      Suggested Improvement
                    </p>

                    <p className="text-gray-700 dark:text-gray-200 text-sm mt-1">
                      {item.improvement}
                    </p>

                  </div>
                )}

              </div>

              <button
                onClick={() => deleteSentiment(item._id)}
                className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Delete
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Sentiments;