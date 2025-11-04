function ContactList() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Alice', email: 'alice@email.com', phone: '01 23 45 67 89' },
    { id: 2, name: 'Bob', email: 'bob@email.com', phone: '02 34 56 78 90' },
    { id: 3, name: 'Charlie', email: 'charlie@email.com', phone: '03 45 67 89 01' }
  ]);
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()) ||
    contact.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Liste de contacts</h1>
      
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher un contact..."
        className="w-full p-3 border rounded-lg mb-6"
      />

      <div className="space-y-4">
        {filteredContacts.map(contact => (
          <div key={contact.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-blue-600">{contact.name}</h3>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-gray-600">{contact.phone}</p>
          </div>
        ))}
        
        {filteredContacts.length === 0 && (
          <p className="text-center text-gray-500 py-8">Aucun contact trouvé</p>
        )}
      </div>
    </div>
  );
}
export default ContactList