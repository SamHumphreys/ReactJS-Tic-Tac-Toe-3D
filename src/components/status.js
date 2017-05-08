import React from 'react';

const Status = (props) => {
  if (props.winner) {
    if (props.winner === 'draw') {
      return <p>The game is a draw :(</p>
    } else {
      return <p>Player {props.winner} is the winner!</p>
    }
  } else {
    return <p>Player {props.whoseTurn} to go next...</p>
  }
};

export default Status;
