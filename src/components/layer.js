import React from 'react';
import Line from './line';

const Layer = (props) => {
  return (
    <div className='layer'>
      {props.layer.map((line, index) => {
        return <Line
                  key={index}
                  line={line}
                  layerNo={props.layerNo}
                  lineNo={index}
                  winner={props.winner}
                  onSquareClick={props.onSquareClick} />
      })}
    </div>
  )
};

export default Layer;
