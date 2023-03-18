//Player object factory
const Player = (name, markerChoice) => {
  return { name, markerChoice };
};

const ticTacToeGame = (() => {
  //Creates a gameboard
  const createGameboard = () => {
    let board;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = 0;
      }
    }
    return board;
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
    createGameboard,
    checkState,
  };
})();

let gameboard = ticTacToeGame.createGameboard();
