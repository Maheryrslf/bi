import React from "react";
function ProductFilter() {
  const [products] = useState([
    { id: 1, name: 'Laptop', category: 'electronics', price: 999 },
    { id: 2, name: 'T-shirt', category: 'clothing', price: 25 },
    { id: 3, name: 'Smartphone', category: 'electronics', price: 699 },
    { id: 4, name: 'Jeans', category: 'clothing', price: 45 },
    { id: 5, name: 'Book', category: 'books', price: 15 },
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );
  
  const totalValue = filteredProducts.reduce((sum, product) => sum + product.price, 0);
  
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Filtre de produits</h1>
      
      <div className="flex gap-4 mb-6">
        {['all', 'electronics', 'clothing', 'books'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid gap-4 mb-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="p-4 border rounded">
            <h3 className="font-semibold">{product.name}</h3>
            <p>Catégorie: {product.category}</p>
            <p>Prix: ${product.price}</p>
          </div>
        ))}
      </div>
      
      <div className="text-lg font-semibold">
        Valeur totale: ${totalValue}
      </div>
    </div>
  );
}
export default ProductFilter