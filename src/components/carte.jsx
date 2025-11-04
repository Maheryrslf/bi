import React from "react";
function LiveSearch() {
  const [items] = useState([
    'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS',
    'Node.js', 'Python', 'Java', 'C++', 'Tailwind CSS'
  ]);
  const [search, setSearch] = useState('');
  
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recherche en temps réel</h1>
      
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher..."
        className="w-full p-3 border rounded mb-4"
      />
      
      <div className="space-y-2">
        {filteredItems.map((item, index) => (
          <div key={index} className="p-3 bg-gray-100 rounded">
            {item}
          </div>
        ))}
        {filteredItems.length === 0 && (
          <p className="text-gray-500 text-center">Aucun résultat trouvé</p>
        )}
      </div>e 
    </div>
  );
}
export default LiveSearch