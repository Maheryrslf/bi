import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import FilterButtons from "./components/FilterButtons";
import { initialNotes } from "./data/initialNotes";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : initialNotes;
  });

  const [filter, setFilter] = useState("toutes");

  // Sauvegarde dans localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, category) => {
    const newNote = {
      id: Date.now(),
      text,
      category,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  // Filtrage
  const filteredNotes = notes.filter((note) => {
    if (filter === "toutes") return true;
    return note.category === filter;
  });

  // Séparation par catégorie
  const personnelles = filteredNotes.filter((n) => n.category === "personnelle");
  const professionnelles = filteredNotes.filter(
    (n) => n.category === "professionnelle"
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Gestionnaire de Notes
        </h1>

        <FilterButtons filter={filter} onFilterChange={setFilter} />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Colonne Personnelle */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <h3 className="text-lg font-semibold text-purple-700">
                  Personnelle
                </h3>
              </div>
              <NoteForm category="personnelle" onAddNote={addNote} />
              <NoteList
                notes={personnelles}
                onDelete={deleteNote}
                title="Notes personnelles"
              />
            </div>
          </div>

          {/* Colonne Professionnelle */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <h3 className="text-lg font-semibold text-green-700">
                  Professionnelle
                </h3>
              </div>
              <NoteForm category="professionnelle" onAddNote={addNote} />
              <NoteList
                notes={professionnelles}
                onDelete={deleteNote}
                title="Notes professionnelles"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}