import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // No winner
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] || isWinner) return; // Prevent clicking on occupied squares or if there's a winner
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O"; // Corrected '0' to 'O'
    setState(copyState);
    setXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setXTurn(true);
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          <div>Winner: {isWinner}</div>
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
         <h5>Player {isXTurn ? 'X' : '0'} it's Your Turn</h5>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
