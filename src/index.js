import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Status from './components/status';
import Score from './components/score';
import checkForWinner from './logic/check-for-winner';


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
      turnCount: 0,
      score: [0,0],
      winner: null
    }
  };

  handleSquareClick (sq) {
    if (this.state.winner) return;
    const [a,b,c] = [sq[0], sq[1], sq[2]];
    if (this.state.board[a][b][c]) return;

    let board = this.state.board.slice();
    let whoseTurn = this.state.whoseTurn;
    const turnCount = this.state.turnCount + 1;
    board[a][b][c] = whoseTurn;
    whoseTurn = (whoseTurn === 'X' ? 'O' : 'X');

    this.setState({board, whoseTurn, turnCount}, () => {
      const winner = checkForWinner(this.state.board, this.state.turnCount);
      if (winner) this.setState({winner});
    });
  };

  render () {
    return (
      <div>
        <Status whoseTurn={this.state.whoseTurn} winner={this.state.winner} />
        <Board board={this.state.board} onSquareClick={sq => this.handleSquareClick(sq)}/>
        <Score score={this.state.score}/>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
