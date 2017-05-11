3D Tic Tac Toe
----------------

repo: https://github.com/SamHumphreys/ReactJS-Tic-Tac-Toe-3D

online: https://tic-tac-toe-3d.herokuapp.com

This is 3 dimensional tic tac toe game using ReactJS, created using the Create-React-App boilerplate, and deployed to Heroku.

I made this app to get more familiar with ReactJS, and to replace my previous Tic Tac Toe app (built using JQuery) on my portfolio.

Game flow:
----------
On loading 3 components are rendered with information from the state of index.js:

  * Status: shows whose turn it is, and whether or not there is a winner
  * Board: displays the game board by mapping the board into Layers, which maps each layer into Lines, which maps each line into Squares.
  * Score: displays the score

Initially all of the squares are available to click on, and will turn green when they're hovered over.

When an available square is clicked it passes the square coordinates up to index.js which
calls the handleSquareClick function. This checks whether or not the square is
available, and if so it will update state.board to reflect the new game state.

When the state is updated it will check the board to see if there is a winning solution or if the game is a draw, and if so will update state.winner accordingly.

When a square in the game state has been taken it will cause the square to be unclickable, and also to turn red when hovered over.

When there is a winning state the squares no longer change colour based on their availability, and the status component updates to show who won or if it is a draw, and the scores are updated accordingly.

Double clicking the board when there is a winning state will call the handleReset function in index.js causing the board to be reset, and whoever didn't go first in the previous game will go first in this round.

Responsiveness
--------------
The app has 2 breakpoints, at 800px and 500px horizontally. These cause the width of the status, board, and score elements to resize at 800px, and then stack vertically at 500px.

Cool beans
-----------
I'm glad I got this working! ReactJS is pretty cool.

Sore beans
-----------
Deploying to Heroku caused a few problems, but I got better at using Git as a result... so win?

ToDos
------
* Add a screen at the start to better explain 3D tic tac toe.
* Styling - improve visually
* Testing
