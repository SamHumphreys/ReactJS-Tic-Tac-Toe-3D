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
      const winner = this.checkForWinner(this.state.board, this.state.turnCount);
      if (winner) this.setState({winner});
    });
  };

  checkForWinner (board, turns) {
    //check layer horizontals * 9, layer verticals * 9, board verticals * 9
    for (let i = 0; i < board.length; i ++) {
      for (let j = 0; j < board[i].length; j ++) {
        //check layer horizontals
        let [a,b,c] = [ board[i][j][0],
                        board[i][j][1],
                        board[i][j][2] ];
        if (a === b && a === c && a !== null) return a;

        //check layer verticals
        [a,b,c] = [ board[i][0][j],
                    board[i][1][j],
                    board[i][2][j] ];
        if (a === b & a === c && a !== null) return a;

        //check board verticals
        [a,b,c] = [ board[0][i][j],
                    board[1][i][j],
                    board[2][i][j] ];
        if (a === b & a === c && a !== null) return a;
      };
    };

    //check layer diagonals * 6
    for (let layer = 0; layer < board.length; layer ++) {
      //check top left to bottom right
      let [a,b,c] = [ board[layer][0][0],
                      board[layer][1][1],
                      board[layer][2][2] ]
      if (a === b & a === c && a !== null) return a;

      //check top right to bottom left
      [a,b,c] = [ board[layer][0][2],
                  board[layer][1][1],
                  board[layer][2][0] ];
      if (a === b && a === c && a !== null) return a;
    };

    //check board diagonals left to right * 3 [000, 101, 202]

    //check board diagonals right to left * 3 [002, 101, 200]

    //check board diagonals top to bottom * 3 [000, 110, 220]

    //check board diagonals bottom to top * 3 [020, 110, 200]

    //check board diagonals top left to bottom right * 1 [000, 111, 222]
    let [a,b,c] = [ board[0][0][0],
                    board[1][1][1],
                    board[2][2][2] ];
    if (a === b && a === c && a !== null) return a;

    //check board diagonals bottom right to top left * 1 [022, 111, 200]
    [a,b,c] = [ board[0][2][2],
                board[1][1][1],
                board[2][0][0] ];
    if (a === b && a === c && a !== null) return a;

    //check board diagonals top right to bottom left * 1 [002, 111, 220]
    [a,b,c] = [ board[0][0][2],
                board[1][1][1],
                board[2][2][0] ];
    if (a === b && a === c && a !== null) return a;

    //check board diagonals bottom left to top right * 1 [020, 111, 202]
    [a,b,c] = [ board[0][2][0],
                board[1][1][1],
                board[2][0][2] ];
    if (a === b && a === c && a !== null) return a;

    //if none of those and there have been 27 moves it is a draw
    if (turns === 27) return 'draw';

    //if no solutions and no draw, no winner
    return null;
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
