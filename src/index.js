import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Status from './components/status';
import Score from './components/score';


class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      board:  [
                [ ['000', '001', '002'],
                  ['010', '011', '012'],
                  ['020', '021', '022'] ],
                [ ['100', '101', '102'],
                  ['110', '111', '112'],
                  ['120', '121', '122'] ],
                [ ['200', '201', '202'],
                  ['210', '211', '212'],
                  ['220', '221', '222'] ]
              ],
      whoseTurn: 'X',
      whoWentFirst: 'X',
      score: [0,0],
      winner: null
    }
  };


  render () {
    return (
      <div>
        <Status whoseTurn={this.state.whoseTurn} winner={this.state.winner} />
        <Board />
        <Score score={this.state.score}/>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
