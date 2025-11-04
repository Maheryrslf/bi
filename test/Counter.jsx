import React from "react";
function CounterWithHistory() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory([...history.slice(-4), newCount]);
  };
  
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history.slice(-4), newCount]);
  };
  
  return (
    <div className="p-6 max-w-sm mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">{count}</h1>
      <div className="flex gap-4 justify-center mb-6">
        <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded">
          -1
        </button>
        <button onClick={increment} className="bg-green-500 text-white px-4 py-2 rounded">
          +1
        </button>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Historique (5 dernières):</h2>
        <div className="flex gap-2 justify-center">
          {history.map((item, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CounterWithHistory