function NoteItem({ note, onDelete }) {
  const bgColor =
    note.category === "personnelle" ? "bg-purple-50" : "bg-green-50";
  const borderColor =
    note.category === "personnelle" ? "border-purple-300" : "border-green-300";

  return (
    <div
      className={`p-4 rounded-lg border ${bgColor} ${borderColor} flex justify-between items-start gap-3`}
    >
      <p className="flex-1 text-gray-800">{note.text}</p>
      <button
        onClick={() => onDelete(note.id)}
        className="text-red-600 hover:text-red-800 font-medium text-sm"
      >
        Supprimer
      </button>
    </div>
  );
}

export default  NoteItem