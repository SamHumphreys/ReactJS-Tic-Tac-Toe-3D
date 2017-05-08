import React from 'react';
import '../styles/square.css';

const Square = (props) => {
  const coOrds = [props.layerNo, props.lineNo, props.squareNo];
  return (
    <div className='square'>
      {props.square}
    </div>
  )
};

export default Square;
