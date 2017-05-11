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

  * Board: displays the game board by mapping the board into <Layer />, which maps each layer into <Line />, which maps each line into <Square />.

  * Score: displays the score

When a square is clicked it passes the square coordinates up to index.js which
calls the handleSquareClick function. This checks whether or not the square is
available, and if so it will update state.board to reflect the new game state.

When the state is updated it will check the board to see if there is a winner, and if so will update state.winner.

When a square in the game state has been taken it will cause the square to be unclickable, and also to turn red when hovered over.

If there is a winning state the squares no longer change colour based on their availability.

When there is a winning state the status component updates to show who won or if it is a draw, and the scores are updated accordingly.

Double clicking the board when there is a winning state will reset the board to be blank, and whoever didn't go first in the previous game will go first in this round.

Cool beans
-----------
I'm glad I got this working! ReactJS is pretty cool.

Sore beans
-----------
Deploying to Heroku caused a few problems, but I got better at using Git as a result... so win?

ToDos
------
* Add a screen at the start to better explain 3D tic tac toe.
* Styling - improve visually and make responsive
* Testing
