export default function FilterButtons({ filter, onFilterChange }) {
  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      <button
        onClick={() => onFilterChange("toutes")}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          filter === "toutes"
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Toutes
      </button>
      <button
        onClick={() => onFilterChange("personnelle")}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          filter === "personnelle"
            ? "bg-purple-600 text-white"
            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
        }`}
      >
        Personnelles
      </button>
      <button
        onClick={() => onFilterChange("professionnelle")}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          filter === "professionnelle"
            ? "bg-green-600 text-white"
            : "bg-green-100 text-green-700 hover:bg-green-200"
        }`}
      >
        Professionnelles
      </button>
    </div>
  );
}