import React from 'react';
import Square from './square';

const Line = (props) => {
  return (
    <div className='line'>
      {props.line.map((square, index) => {
        return <Square
                  key={index}
                  layerNo={props.layerNo}
                  lineNo={props.lineNo}
                  squareNo={index}
                  square={square}
                  onSquareClick={props.onSquareClick} />
      })}
    </div>
  )
};

export default Line;
