import React from 'react';

export default class LoadScreen extends React.Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {
    return (
      <div className='load-screen'>
        <h1>Welcome to 3D Tic Tac Toe!</h1>
        <p>This is an extension of normal Tic Tac Toe, only now there are 3 layers of 3x3 boards to play on! </p>
        <p>Imagine that the 3 boards are stacked on top of each other, and you can win by getting 3 tokens in a row either horizontally, vertically, or diagonally on each layer as with standard Tic Tac Toe, or by getting 3 in a row across all three layers.</p>
        <p>This means that there are now 49 winning combinations instead of the 8 winning combination in normal Tic Tac Toe.... WOOOOO!</p>
        <button onClick={()=>this.props.loadScreenShown()}>Ok, I've got it</button>
      </div>
    )
  }
};
