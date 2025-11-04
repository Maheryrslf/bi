import React from "react";
function QuoteGenerator() {
  const [quotes] = useState([
    "La vie est un défi à relever.",
    "Le succès c'est tomber sept fois, se relever huit.",
    "Croire en ses rêves, c'est déjà les réaliser.",
    "Le plus grand risque est de ne prendre aucun risque."
  ]);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md text-center shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Citations Inspirantes</h1>
        <div className="bg-gray-100 p-6 rounded-xl mb-6">
          <p className="text-xl text-gray-700 italic">"{currentQuote}"</p>
        </div>
        <button 
          onClick={randomQuote}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
        >
          Nouvelle citation
        </button>
      </div>
    </div>
  );
}
export default QuoteGenerator