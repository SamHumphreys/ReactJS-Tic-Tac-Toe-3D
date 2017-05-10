import React from 'react';

const Status = (props) => {
  if (props.winner) {
    if (props.winner === 'draw') {
      return (
        <div className='status'>
          <p>The game is a draw :(</p>
          <p>Double-click anywhere to play again!</p>
        </div>
      )
    } else {
      return (
        <div className='status'>
          <p>{props.winner} won the game!</p>
          <p>Double-click anywhere to play again!</p>
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
