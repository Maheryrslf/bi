// Dev 1 - VoteOption.jsx
function VoteOption({ option, votes, totalVotes, onVote }) {
  const percentage = totalVotes > 0 ? (votes / totalVotes) * 100 : 0;

  return (
    <div className="border rounded-lg p-4 mb-3 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{option.text}</h3>
        <span className="text-sm text-gray-600">{votes} votes</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <button
        onClick={onVote}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Voter
      </button>
    </div>
  );
}
export default VoteOption

// Dev 2 - VotingApp.jsx
function VotingApp() {
  const [options, setOptions] = useState([
    { id: 1, text: "React", votes: 0 },
    { id: 2, text: "Vue", votes: 0 },
    { id: 3, text: "Angular", votes: 0 },
    { id: 4, text: "Svelte", votes: 0 }
  ]);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (optionId) => {
    if (hasVoted) return;
    
    setOptions(options.map(option =>
      option.id === optionId ? { ...option, votes: option.votes + 1 } : option
    ));
    setHasVoted(true);
  };

  const resetVotes = () => {
    setOptions(options.map(option => ({ ...option, votes: 0 })));
    setHasVoted(false);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Quel est votre framework préféré ?</h1>
      <p className="text-gray-600 mb-6">Total des votes: {totalVotes}</p>

      <div className="space-y-3">
        {options.map(option => (
          <VoteOption
            key={option.id}
            option={option}
            votes={option.votes}
            totalVotes={totalVotes}
            onVote={() => handleVote(option.id)}
          />
        ))}
      </div>

      {hasVoted && (
        <div className="mt-6 text-center">
          <p className="text-green-600 mb-3">Merci pour votre vote !</p>
          <button
            onClick={resetVotes}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Recommencer le vote
          </button>
        </div>
      )}
    </div>
  );
}