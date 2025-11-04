import React from "react";
import NoteItem from "./components/NoteItem";

export default function NoteList({ notes, onDelete, title }) {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500 italic">Aucune note pour l'instant.</p>
      ) : (
        <div className="space-y-3">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}