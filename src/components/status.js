import React from 'react';

const Status = (props) => {
  if (props.winner) {
    if (props.winner === 'draw') {
      return (
        <div>
          <p>The game is a draw :(</p>
          <button onClick={() => props.onResetClick()}>Play again</button>
        </div>
      )
    } else {
      return (
        <div>
          <p>{props.winner} won the game!</p>
          <button onClick={() => props.onResetClick()}>Play again</button>
        </div>
      )
    }
  } else {
    return <p>Player {props.whoseTurn} to go next...</p>
  }
};

export default Status;
