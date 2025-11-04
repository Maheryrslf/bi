// Dev 1 - ShoppingItem.jsx
function ShoppingItem({ item, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(item.name);

  const handleSave = () => {
    onEdit(item.id, editName);
    setIsEditing(false);
  };

  return (
    <div className={`flex items-center justify-between p-3 border rounded-lg ${
      item.completed ? 'bg-green-50' : 'bg-white'
    }`}>
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
          className="h-4 w-4"
        />
        
        {isEditing ? (
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleSave}
            onKeyPress={(e) => e.key === 'Enter' && handleSave()}
            className="flex-1 p-1 border rounded"
            autoFocus
          />
        ) : (
          <span 
            className={`flex-1 ${item.completed ? 'line-through text-gray-500' : ''}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {item.name} - {item.quantity} {item.category && `(${item.category})`}
          </span>
        )}
      </div>
      
      <div className="flex gap-2">
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-500 text-sm"
        >
          ✏️
        </button>
        <button 
          onClick={() => onDelete(item.id)}
          className="text-red-500 text-sm"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
export default ShoppingItem

// Dev 2 - ShoppingList.jsx
function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, {
        id: Date.now(),
        name: newItem,
        quantity,
        category,
        completed: false
      }]);
      setNewItem('');
      setQuantity(1);
      setCategory('');
    }
  };

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, newName) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, name: newName } : item
    ));
  };

  const categories = [...new Set(items.map(item => item.category).filter(Boolean))];
  const totalItems = items.length;
  const completedItems = items.filter(item => item.completed).length;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Liste de Courses Collaborative</h1>
      
      {/* Formulaire d'ajout */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6 space-y-3">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Article à acheter..."
          className="w-full p-2 border rounded"
        />
        <div className="flex gap-3">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            min="1"
            className="w-20 p-2 border rounded"
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Catégorie (optionnel)"
            className="flex-1 p-2 border rounded"
          />
        </div>
        <button onClick={addItem} className="w-full bg-green-500 text-white py-2 rounded">
          Ajouter à la liste
        </button>
      </div>

      {/* Statistiques */}
      <div className="flex justify-between mb-4 text-sm text-gray-600">
        <span>Total: {totalItems} articles</span>
        <span>Complétés: {completedItems}</span>
        <span>Restants: {totalItems - completedItems}</span>
      </div>

      {/* Catégories */}
      {categories.length > 0 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {categories.map(cat => (
            <span key={cat} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Liste des articles */}
      <div className="space-y-2">
        {items.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={toggleItem}
            onDelete={deleteItem}
            onEdit={editItem}
          />
        ))}
      </div>
    </div>
  );
}