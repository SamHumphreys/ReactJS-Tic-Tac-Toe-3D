import React from 'react';

const Status = (props) => {
  if (props.winner) {
    if (props.winner === 'draw') {
      return (
        <div className='status main'>
          <p>The game is a draw :(</p>
          <p className='reset'>Click anywhere to play again!</p>
        </div>
      )
    } else {
      return (
        <div className='status main'>
          <p>{props.winner} won the game!</p>
          <p className='reset'>Click anywhere to play again!</p>
        </div>
      )
    }
  };

  return (
      <div className='status main'>
        <p>Player {props.whoseTurn} to go next...</p>
      </div>
  );
};

export default Status;
