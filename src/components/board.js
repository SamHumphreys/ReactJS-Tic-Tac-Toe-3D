import React from 'react';
import Layer from './layer';

const Board = (props) => {
  return (
    <div className='board'>
      {props.board.map((layer, index) => {
        return <Layer
                  key={index}
                  layer={layer}
                  layerNo={index} />
      })}
    </div>
  )
};

export default Board;
