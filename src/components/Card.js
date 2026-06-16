function Card({ title = "Untitled", description = "No description available" }) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl p-6 w-80 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-5">
        <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
          AI Powered
        </span>
      </div>
    </div>
  );
}

export default Card;