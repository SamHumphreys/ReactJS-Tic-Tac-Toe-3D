import React from 'react';

const Square = (props) => {
  const coords = [props.layerNo, props.lineNo, props.squareNo];
  return (
    <div className='square' onClick={() => props.onSquareClick(coords)}>
      {props.square}
    </div>
  )
};

export default Square;
