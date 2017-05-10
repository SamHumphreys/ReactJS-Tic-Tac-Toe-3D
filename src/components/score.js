import React from 'react';

const Score = (props) => {
  return (
    <div className='score'>
      <p>Scores...</p>
      <p>Player X: {props.score[0]}</p>
      <p>Player Y: {props.score[1]}</p>
    </div>
  )
};

export default Score;
