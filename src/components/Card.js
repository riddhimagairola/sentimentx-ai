function Card({ title = "Untitled", description = "No description available" }) {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 w-72 hover:shadow-xl transition duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}

export default Card;