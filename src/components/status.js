import React from 'react';
import '../styles/status.css';

const Status = (props) => {
  if (props.winner) {
    if (props.winner === 'draw') {
      return (
        <div className='status'>
          <p>The game is a draw :(</p>
          <button onClick={() => props.onResetClick()}>Click to play again</button>
        </div>
      )
    } else {
      return (
        <div className='status'>
          <p>{props.winner} won the game!</p>
          <button onClick={() => props.onResetClick()}>Click to play again</button>
        </div>
      )
    }
  };

  return (
      <div className='status'>
        <p>Player {props.whoseTurn} to go next...</p>
      </div>
  );
};

export default Status;
