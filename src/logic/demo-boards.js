const DemoBoards = (num) => {
  const DemoBoards = [
          //board 0
          [
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
          ],
          //board 1
          [
              [
                [null, null, null],
                [null, null, null],
                [null, null, null]
              ],
              [
                ['X', null, null],
                ['X', null, null],
                ['X', null, null]
              ],
              [
                [null, null, null],
                [null, null, null],
                [null, null, null]
              ]
          ],
          //board 2
          [
              [
                ['X', null, null],
                [null, null, null],
                [null, null, null]
              ],
              [
                ['X', null, null],
                [null, null, null],
                [null, null, null]
              ],
              [
                ['X', null, null],
                [null, null, null],
                [null, null, null]
              ]
          ],
          //board 3
          [
              [
                ['X', null, null],
                [null, null, null],
                [null, null, null]
              ],
              [
                [null, 'X', null],
                [null, null, null],
                [null, null, null]
              ],
              [
                [null, null, 'X'],
                [null, null, null],
                [null, null, null]
              ]
          ],
          //board 4
          [
              [
                ['X', null, null],
                [null, null, null],
                [null, null, null]
              ],
              [
                [null, null, null],
                [null, 'X', null],
                [null, null, null]
              ],
              [
                [null, null, null],
                [null, null, null],
                [null, null, 'X']
              ]
          ]
  ]
  return DemoBoards[num];
};

export default DemoBoards;
