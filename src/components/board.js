import React from 'react';
import Layer from './layer';
import '../styles/board.css';

const Board = (props) => {
  return (
    <div className='board'>
      {props.board.map((layer, index) => {
        return <Layer
                  key={index}
                  layer={layer}
                  layerNo={index}
                  onSquareClick={props.onSquareClick} />
      })}
    </div>
  )
};

export default Board;
