const resetBoard = (whoWentFirst) => {
  const board = [ [ [null,null,null],
                    [null,null,null],
                    [null,null,null] ],
                  [ [null,null,null],
                    [null,null,null],
                    [null,null,null] ],
                  [ [null,null,null],
                    [null,null,null],
                    [null,null,null] ]  ];
  const whoseTurn = (whoWentFirst === 'X' ? 'O' : 'X');
  const newWhoWentFirst = whoseTurn;
  return ({ board,
            whoseTurn,
            whoWentFirst: newWhoWentFirst,
            winner: null,
            turnCount: 0  });
};

export default resetBoard;
