import { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";

function Sentiments() {
  const [sentiments, setSentiments] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH DATA
  const fetchSentiments = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/sentiments");
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

  // DELETE
  const deleteSentiment = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/sentiments/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.status === 204) {
        setSentiments((prev) =>
          prev.filter((item) => item.id !== id)
        );
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

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Sentiments
      </h1>

      {/* EMPTY STATE */}
      {sentiments.length === 0 ? (
        <p className="text-gray-500">No sentiments found.</p>
      ) : (
        <div className="grid gap-3">

          {sentiments.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex justify-between items-center"
            >

              {/* LEFT SIDE */}
              <div>
                <p className="text-gray-700 dark:text-gray-200">
                  {item.text}
                </p>

                {/* BADGE */}
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                    item.sentiment?.toLowerCase() === "positive"
                      ? "bg-green-100 text-green-700"
                      : item.sentiment?.toLowerCase() === "negative"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.sentiment}
                </span>
              </div>

              {/* DELETE BUTTON */}
              <button
                onClick={() => deleteSentiment(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
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