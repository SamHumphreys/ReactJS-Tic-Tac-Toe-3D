import React from 'react';
import Line from './line';
import '../styles/layer.css';

const Layer = (props) => {
  return (
    <div className='layer'>
      {props.layer.map((line, index) => {
        return <Line
                  key={index}
                  line={line}
                  layerNo={props.layerNo}
                  lineNo={index} />
      })}
    </div>
  )
};

export default Layer;
