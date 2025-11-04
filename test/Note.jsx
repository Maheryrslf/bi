// Dev 1 - Note.jsx
function Note({ note, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleSave = () => {
    onEdit(note.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      {isEditing ? (
        <div className="space-y-2">
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-2">
            <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
              Sauvegarder
            </button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-3 py-1 rounded text-sm">
              Annuler
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="mb-2">{note.text}</p>
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
              Éditer
            </button>
            <button onClick={() => onDelete(note.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">
              Supprimer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Note

// Dev 2 - NoteApp.jsx
function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [filter, setFilter] = useState('all');

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote, completed: false }]);
      setNewNote('');
    }
  };

  const editNote = (id, newText) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, text: newText } : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note => {
    if (filter === 'completed') return note.completed;
    if (filter === 'active') return !note.completed;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Notes Partagées</h1>
      
      {/* Formulaire d'ajout */}
      <div className="flex gap-2 mb-6">
        <input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Nouvelle note..."
          className="flex-1 p-2 border rounded"
        />
        <button onClick={addNote} className="bg-green-500 text-white px-4 rounded">
          Ajouter
        </button>
      </div>

      {/* Filtres */}
      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {f === 'all' ? 'Toutes' : f === 'active' ? 'Actives' : 'Complétées'}
          </button>
        ))}
      </div>

      {/* Liste des notes */}
      <div className="grid gap-3">
        {filteredNotes.map(note => (
          <Note
            key={note.id}
            note={note}
            onEdit={editNote}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}