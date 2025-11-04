function ColorPicker() {
  const [colors] = useState([
    { name: 'Rouge', value: 'bg-red-500' },
    { name: 'Bleu', value: 'bg-blue-500' },
    { name: 'Vert', value: 'bg-green-500' },
    { name: 'Jaune', value: 'bg-yellow-500' },
    { name: 'Violet', value: 'bg-purple-500' }
  ]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Sélecteur de couleurs</h1>
        
        <div className={`w-64 h-64 mx-auto rounded-2xl shadow-lg transition-all duration-300 ${selectedColor.value} mb-8 flex items-center justify-center`}>
          <span className="text-white font-bold text-xl bg-black bg-opacity-30 px-4 py-2 rounded">
            {selectedColor.name}
          </span>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          {colors.map(color => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-12 h-12 rounded-full ${color.value} border-2 ${
                selectedColor.name === color.name ? 'border-black scale-110' : 'border-transparent'
              } transition-all`}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ColorPicker