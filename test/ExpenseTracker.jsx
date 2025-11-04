function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    if (description && amount) {
      setExpenses([...expenses, {
        id: Date.now(),
        description,
        amount: parseFloat(amount)
      }]);
      setDescription('');
      setAmount('');
    }
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Suivi des Dépenses</h1>
      
      <form onSubmit={addExpense} className="mb-6 space-y-3">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Montant"
          className="w-full p-3 border rounded-lg"
        />
        <button 
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold"
        >
          Ajouter la dépense
        </button>
      </form>

      <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        <h2 className="text-lg font-semibold">Total: {total.toFixed(2)}€</h2>
      </div>

      <div className="space-y-3">
        {expenses.map(expense => (
          <div key={expense.id} className="flex justify-between items-center p-3 border rounded-lg">
            <span>{expense.description}</span>
            <span className="font-semibold text-red-600">{expense.amount.toFixed(2)}€</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseTracker