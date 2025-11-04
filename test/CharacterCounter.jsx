function CharacterCounter() {
  const [text, setText] = useState('');
  
  const characterCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Compteur de caractères</h1>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tapez votre texte ici..."
        className="w-full h-48 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{characterCount}</div>
          <div className="text-blue-800">Caractères</div>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{wordCount}</div>
          <div className="text-green-800">Mots</div>
        </div>
      </div>
      
      {characterCount > 100 && (
        <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
          ⚠️ Votre texte dépasse 100 caractères
        </div>
      )}
    </div>
  );
}

export default CharacterCounter