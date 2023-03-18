let container = document.querySelector(".tic-tac-toe-container");
let playButton = document.querySelector(".play-button");

//Player object factory
const Player = (name, markerChoice) => {
  return { name, markerChoice };
};

const ticTacToeGame = (() => {
  let placedO = true;
  let numberOfTurns = 0;

  // Resets everything and starts a new game
  const newGame = () => {
    placedO = true;
    numberOfTurns = 0;

    // Continously deleted the first Child of container until it has no children left
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    let gameBoard = [[], [], []];
    let boardInDom = [[], [], []];

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
            if (placedO) {
              board[i][j].classList.toggle("add-X");
              placedO = false;
            } else {
              board[i][j].classList.toggle("add-O");
              placedO = true;
            }
            numberOfTurns++;
          },
          { once: true }
        );
      }
    }
    return board;
  };

  //
  const removeEventListeners = (boardInDom) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boardInDom[i][j].removeEventListener(
          "click",
          () => {
            if (placedO) {
              board[i][j].classList.toggle("add-X");
              placedO = false;
            } else {
              board[i][j].classList.toggle("add-O");
              placedO = true;
            }
            numberOfTurns++;
          },
          { once: true }
        );
      }
    }
  };

  // Place player's marker on the board
  const playTurn = (player, boardValue) => {
    if (boardValue != 0) {
      return boardValue;
    }

    if (player.markerChoice == "X") {
      return boardValue + 1;
    }

    if (player.markerChoice == "O") {
      return boardValue - 1;
    }
  };

  // Checks if any win conditions have been met:
  const checkState = (board) => {
    let checkWinner = 0;
    //Check row0
    if (
      board[0][0] + board[0][1] + board[0][2] === 3 ||
      board[0][0] + board[0][1] + board[0][2] === -3
    ) {
      return checkWinner;
    }
    //Check row1
    if (
      board[1][0] + board[1][1] + board[1][2] === 3 ||
      board[1][0] + board[1][1] + board[1][2] === -3
    ) {
      return checkWinner;
    }
    //Check row2
    if (
      board[2][0] + board[2][1] + board[2][2] === 3 ||
      board[2][0] + board[2][1] + board[2][2] === -3
    ) {
      return checkWinner;
    }

    //Check col0
    if (
      board[0][0] + board[1][0] + board[2][0] === 3 ||
      board[0][0] + board[1][0] + board[2][0] === -3
    ) {
      return checkWinner;
    }

    //Check col1
    if (
      board[0][1] + board[1][1] + board[2][1] === 3 ||
      board[0][1] + board[1][1] + board[2][1] === -3
    ) {
      return checkWinner;
    }

    //Check col2
    if (
      board[0][2] + board[1][2] + board[2][2] === 3 ||
      board[0][2] + board[1][2] + board[2][2] === -3
    ) {
      return checkWinner;
    }

    //Check forwards-diagonal
    if (
      board[0][0] + board[1][1] + board[2][2] === 3 ||
      board[0][0] + board[1][1] + board[2][2] === -3
    ) {
      return checkWinner;
    }

    //Check backwards-diagonal
    if (
      board[0][2] + board[1][1] + board[2][0] === 3 ||
      board[0][2] + board[1][1] + board[2][0] === -3
    ) {
      return checkWinner;
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
