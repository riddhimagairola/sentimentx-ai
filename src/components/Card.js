export default function Card({ title, description }) {
  return (
    <div className="bg-gray-200 dark:bg-slate-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-md w-72 transition-colors duration-300">

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>

      <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
        AI Powered
      </span>

    </div>
  );
}