import React from 'react';
import Layer from './layer';

const Board = (props) => {
  return (
    <div className='board main'>
      {props.board.map((layer, index) => {
        return <Layer
                  key={index}
                  layer={layer}
                  layerNo={index}
                  winner={props.winner}
                  onSquareClick={props.onSquareClick} />
      })}
    </div>
  )
};

export default Board;
