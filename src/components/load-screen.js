import React from 'react';
import Board from './board';
import DemoBoards from '../logic/demo-boards';

export default class LoadScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      demoNo: 0,
      intervalId: null,
      board: [
                [
                  ['X', 'X', 'X'],
                  [null, null, null],
                  [null, null, null]
                ],
                [
                  [null, null, null],
                  [null, null, null],
                  [null, null, null]
                ],
                [
                  [null, null, null],
                  [null, null, null],
                  [null, null, null]
                ]
      ]
    }
  };

  componentDidMount () {
    const intervalId = setInterval(() => {
      const demoNo = (this.state.demoNo + 1) % 5;
      this.setState({demoNo}, () => {
        this.setState({board: DemoBoards(this.state.demoNo)});
      });
    }, 2000);
    this.setState({intervalId});
  };

  componentWillUnmount () {
    clearInterval(this.state.intervalId);
  };

  skipTutorial () {
    this.props.skipTutorial();
  };

  handleSquareClick () {};

  render() {
    return (
      <div className='load-screen' onClick={this.skipTutorial.bind(this)}>
        <h1>Welcome to 3D Tic Tac Toe!</h1>

        <p>(Click anywhere to skip to the game...)</p>

        <p>This is an extension of normal Tic Tac Toe, only now there are 3 layers of 3x3 boards to play on!</p>

        <p>Imagine that the 3 boards are stacked on top of each other, and you can win by getting 3 tokens in a row either horizontally, vertically, or diagonally on each layer as with standard Tic Tac Toe, or by getting 3 in a row across all three layers.</p>

        <p>This means that there are now 49 winning combinations instead of the 8 winning combination in normal Tic Tac Toe.... WOOOOO!</p>

        <p>Scroll down for some examples of winning combinations.</p>

        <h2>Examples of winning combinations...</h2>

        <Board board={this.state.board}
                onSquareClick={() => this.handleSquareClick()} />
      </div>
    )
  }
};
