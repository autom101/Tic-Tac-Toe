let container = document.querySelector(".tic-tac-toe-container");
let playButton = document.querySelector(".play-button");

const ticTacToeGame = (() => {
  let placedO = true;
  let numberOfTurns = 0;
  let winner = false;
  let tie = false;
  let gameBoard = [[], [], []];

  // Resets everything and starts a new game
  const newGame = () => {
    placedO = true;
    numberOfTurns = 0;
    winner = false;
    tie = false;
    gameBoard = [[], [], []];
    let boardInDom = [[], [], []];

    // Continously deleted the first Child of container until it has no children left
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    gameBoard = createGameBoard(gameBoard);
    boardInDom = renderGameboard(boardInDom);
    createEventListeners(boardInDom);
  };

  // Creates a gameboard array
  const createGameBoard = (board) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = 0;
      }
    }
    return board;
  };

  // Puts gameboard onto DOM
  const renderGameboard = (board) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = document.createElement("div");
        board[i][j].classList.add("tic-tac-toe-square");

        container.appendChild(board[i][j]);
      }
    }
    return board;
  };

  // Makes event listeners to let players place markers
  const createEventListeners = (board) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j].addEventListener(
          "click",
          () => {
            numberOfTurns++;

            if (placedO) {
              board[i][j].classList.toggle("add-X");
              gameBoard[i][j]++;
              checkState(gameBoard);

              placedO = false;
            } else {
              board[i][j].classList.toggle("add-O");
              gameBoard[i][j]--;
              checkState(gameBoard);

              placedO = true;
            }
          },
          { once: true }
        );
      }
    }
    return board;
  };

  // Checks if any win conditions have been met:
  const checkState = (board) => {
    //Check row0
    if (numberOfTurns >= 4 && winner === false) {
      if (
        board[0][0] + board[0][1] + board[0][2] === 3 ||
        board[0][0] + board[0][1] + board[0][2] === -3
      ) {
        console.log("Winnnerrrrr row0");
        winner = true;
      }

      //Check row1
      if (
        board[1][0] + board[1][1] + board[1][2] === 3 ||
        board[1][0] + board[1][1] + board[1][2] === -3
      ) {
        console.log("Winnnerrrrr row1");
        winner = true;
      }

      //Check row2
      if (
        board[2][0] + board[2][1] + board[2][2] === 3 ||
        board[2][0] + board[2][1] + board[2][2] === -3
      ) {
        console.log("Winnnerrrrr row2");
        winner = true;
      }

      //Check col0
      if (
        board[0][0] + board[1][0] + board[2][0] === 3 ||
        board[0][0] + board[1][0] + board[2][0] === -3
      ) {
        console.log("Winnnerrrrr col0");
        winner = true;
      }

      //Check col1
      if (
        board[0][1] + board[1][1] + board[2][1] === 3 ||
        board[0][1] + board[1][1] + board[2][1] === -3
      ) {
        console.log("Winnnerrrrr col1");
        winner = true;
      }

      //Check col2
      if (
        board[0][2] + board[1][2] + board[2][2] === 3 ||
        board[0][2] + board[1][2] + board[2][2] === -3
      ) {
        console.log("Winnnerrrrr col2");
        winner = true;
      }

      //Check forwards-diagonal
      if (
        board[0][0] + board[1][1] + board[2][2] === 3 ||
        board[0][0] + board[1][1] + board[2][2] === -3
      ) {
        console.log("Winnnerrrrr forward-diagonal");
        winner = true;
      }

      //Check backwards-diagonal
      if (
        board[0][2] + board[1][1] + board[2][0] === 3 ||
        board[0][2] + board[1][1] + board[2][0] === -3
      ) {
        console.log("Winnnerrrrr backward-diagonal");
        winner = true;
      }
    }

    if (numberOfTurns === 9 && winner === false) {
      console.log("tie :(");
      tie = true;
    }
  };

  return {
    newGame,
  };
})();

playButton.addEventListener("click", () => {
  newGameboard = ticTacToeGame.newGame();
});

ticTacToeGame.newGame();
