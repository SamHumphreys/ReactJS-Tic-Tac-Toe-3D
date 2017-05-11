import React from 'react';

const Square = (props) => {
  const coords = [props.layerNo, props.lineNo, props.squareNo];
  let className = 'free square';
  if (props.winner) {
    className = 'square';
  } else if (props.square) {
    className = 'taken square'
  };
  return (
    <div className={className} onClick={() => props.onSquareClick(coords)}>
      {props.square}
    </div>
  )
};

export default Square;
