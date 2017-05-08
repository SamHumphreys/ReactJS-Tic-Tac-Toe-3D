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
                [ [null,null,null],
                  [null,null,null],
                  [null,null,null] ],
                [ [null,null,null],
                  [null,null,null],
                  [null,null,null] ],
                [ [null,null,null],
                  [null,null,null],
                  [null,null,null] ]
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
        <Board board={this.state.board} />
        <Score score={this.state.score}/>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
