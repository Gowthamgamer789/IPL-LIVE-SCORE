import React, { useEffect, useState } from 'react';

function App() {
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Replace with actual API
    fetch('https://api.example.com/ipl-score')
      .then(response => response.json())
      .then(data => setScore(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Live IPL Score</h1>
      {score ? (
        <div>
          <p>{score.team1} vs {score.team2}</p>
          <p>{score.status}</p>
          <p>{score.score}</p>
        </div>
      ) : (
        <p>Loading score...</p>
      )}
    </div>
  );
}

export default App;