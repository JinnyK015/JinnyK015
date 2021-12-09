document.addEventListener("DOMContentLoaded", start);

// Define your `board` object here!
let board = {
  cells: [ ],
};

function start() {
  const emoj = ['😎','😍','😂','😑','😊','💜','🤣','❤','🦄','🏆','🥰','🤩'];
  let cute = emoj[Math.floor(Math.random()*emoj.length)];
  document.querySelector('h1').innerHTML = `Minesweeper ${cute}`

  document.getElementById("start").addEventListener("click", startGame);
  document.querySelector('#restart').addEventListener("click", () => {window.location.reload()})
}

function startGame() {
  let BOARD_SIZE = document.getElementById('level').value;
  let NUM_OF_MINES = document.getElementById('mineNum').value;

  const startBtn = document.getElementById('start');
  startBtn.addEventListener('click', makeBoard(BOARD_SIZE, NUM_OF_MINES));

 

  for (let i = 0; i < board.cells.length; i++) {
    countSurroundingMines(board.cells[i]);
  }
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);


  // Don't remove this function call: it makes the game work!
  lib.initBoard();
}




// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  let cellArr = board.cells;
  let bombNumTotal = 0;
  let markedCell = 0;
  let hiddenCell = cellArr.length;

  cellArr.forEach((obj) => {
    if (obj.isMine == true) {
      bombNumTotal++;
    }
    if (obj.isMarked == true) {
      markedCell++;
    }
    if (obj.hidden == false) {
      hiddenCell--;
    }
  });

  for (let i = 0; i < cellArr.length; i++) {
    if (cellArr[i].isMine == true && cellArr[i].isMarked == false) {
      return;
    } else if (cellArr[i].isMine == false && cellArr[i].hidden == true) {
      return;
    } else if (cellArr[i].isMine == false && cellArr[i].isMarked == true) {
      return;
    } else if (cellArr[i].isMine == true && cellArr[i].isMarked == true) {
      if (bombNumTotal == markedCell && hiddenCell == markedCell) {
        return lib.displayMessage("You win!");
      }
    }
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  // lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  const surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let mineCounter =0;

   for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine == true) {
      mineCounter++;
      cell.surroundingMines= mineCounter;
    }
}
}



function makeBoard(BOARD_SIZE, NUM_OF_MINES) {
  const setting = document.getElementById('setting');
  setting.classList.add('nonedisplay');
  const restartBtn = document.querySelector('#restart');
  restartBtn.classList.remove('nonedisplay');

  
  const minePositions = getMinePositions(BOARD_SIZE, NUM_OF_MINES);

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      const cell = {
        row: i,
        col: j,
        isMine: minePositions.some(positionMatch.bind(null, { i, j })),
        isMarked: false,
        hidden: true,
        surroundingMines: 0,
      };
      board.cells.push(cell);
    }
  }
  return board;
}


function getMinePositions(boardSize, numberOfMines) {
  const positions = []

  while (positions.length < numberOfMines) {
    const position = {
      i: randomNum(boardSize),
      j: randomNum(boardSize),
    }

    if (!positions.some(positionMatch.bind(null, position))) {
      positions.push(position)
    }
  }

  return positions
}

function positionMatch(a, b) {
  return a.i === b.i && a.j === b.j
}

function randomNum(size) {
  return Math.floor(Math.random() * size)
}
