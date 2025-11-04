function QuickQuiz() {
  const [questions] = useState([
    {
      question: "Quel langage est utilisé pour le style?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      correct: 1
    },
    {
      question: "React est une bibliothèque...",
      options: ["Backend", "JavaScript", "Base de données", "OS"],
      correct: 1
    }
  ]);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Résultats du Quiz</h1>
        <div className="bg-green-100 p-6 rounded-lg mb-4">
          <p className="text-xl">Score: {score}/{questions.length}</p>
          <p className="text-lg mt-2">
            {score === questions.length ? "🎉 Excellent!" : score >= questions.length/2 ? "👍 Bien joué!" : "💪 Continuez à pratiquer!"}
          </p>
        </div>
        <button 
          onClick={restartQuiz}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Quiz Rapide</h1>
      
      <div className="bg-white border rounded-lg p-6">
        <div className="mb-4">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1}/{questions.length}
          </span>
        </div>
        
        <h2 className="text-xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h2>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickQuiz