let container = document.querySelector(".tic-tac-toe-container");
let playButton = document.querySelector(".play-button");

let playerOneWin = document.querySelector(".player-one-wins");
let playerOneLoss = document.querySelector(".player-one-losses");
let playerOneTie = document.querySelector(".player-one-ties");

let playerTwoWin = document.querySelector(".player-two-wins");
let playerTwoLoss = document.querySelector(".player-two-losses");
let playerTwoTie = document.querySelector(".player-two-ties");

const Player = () => {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  return { wins, losses, ties };
};

const ticTacToeGame = (() => {
  let placedO = true;
  let numberOfTurns = 0;
  let winner = false;
  let tie = false;
  let gameBoard = [[], [], []];
  let player1 = Player();
  let player2 = Player();

  // Resets everything and starts a new game
  const newGame = () => {
    placedO = true;
    numberOfTurns = 0;
    winner = false;
    tie = false;
    gameBoard = [[], [], []];
    let boardInDom = [[], [], []];

    // Continously delete the first Child of container until it has no children left
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
            if (!winner) {
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
            }
          },
          { once: true }
        );
      }
    }
    return board;
  };

  // Show new player score on DOM
  const displayPlayerScore = () => {
    //
    playerOneWin.innerHTML = player1.wins;
    playerOneLoss.innerHTML = player1.losses;
    playerOneTie.innerHTML = player1.ties;

    playerTwoWin.innerHTML = player2.wins;
    playerTwoLoss.innerHTML = player2.losses;
    playerTwoTie.innerHTML = player2.ties;
  };

  // Update player objects when there is a win/loss/tie
  const updatePlayerScore = (whoWon = "tie") => {
    if (whoWon === "playerOne") {
      player1.wins += 1;
      player2.losses += 1;
    } else if (whoWon == "playerTwo") {
      player2.wins += 1;
      player1.losses += 1;
    } else {
      player1.ties += 1;
      player2.ties += 1;
    }

    displayPlayerScore();
  };

  // Checks if any win conditions have been met:
  const checkState = (board) => {
    //Check row0
    if (numberOfTurns >= 4 && winner === false) {
      if (board[0][0] + board[0][1] + board[0][2] === 3) {
        updatePlayerScore("playerOne");
        return;
      }
      if (board[0][0] + board[0][1] + board[0][2] === -3) {
        updatePlayerScore("playerTwo");
        return;
      }

      //Check row1
      if (board[1][0] + board[1][1] + board[1][2] === 3) {
        updatePlayerScore("playerOne");
        return;
      }
      if (board[1][0] + board[1][1] + board[1][2] === -3) {
        updatePlayerScore("playerTwo");
        return;
      }

      //Check row2
      if (board[2][0] + board[2][1] + board[2][2] === 3) {
        updatePlayerScore("playerOne");
        return;
      }
      if (board[2][0] + board[2][1] + board[2][2] === -3) {
        updatePlayerScore("playerTwo");
        return;
      }

      //Check col0
      if (board[0][0] + board[1][0] + board[2][0] === 3) {
        updatePlayerScore("playerOne");
        return;
      }
      if (board[0][0] + board[1][0] + board[2][0] === -3) {
        updatePlayerScore("playerTwo");
        return;
      }

      //Check col1
      if (board[0][1] + board[1][1] + board[2][1] === 3) {
        updatePlayerScore("playerOne");
        return;
      }
      if (board[0][1] + board[1][1] + board[2][1] === -3) {
        updatePlayerScore("playerTwo");
        return;
      }

      //Check col2
      if (board[0][2] + board[1][2] + board[2][2] === 3) {
        updatePlayerScore("playerOne");
        return;
      }
      if (board[0][2] + board[1][2] + board[2][2] === -3) {
        updatePlayerScore("playerTwo");
        return;
      }

      //Check forwards-diagonal
      if (board[0][0] + board[1][1] + board[2][2] === 3) {
        updatePlayerScore("playerOne");
        return;
      }
      if (board[0][0] + board[1][1] + board[2][2] === -3) {
        updatePlayerScore("playerTwo");
        return;
      }

      //Check backwards-diagonal
      if (board[0][2] + board[1][1] + board[2][0] === 3) {
        updatePlayerScore("playerOne");
        return;
      }
      if (board[0][2] + board[1][1] + board[2][0] === -3) {
        updatePlayerScore("playerTwo");
        return;
      }
    }

    if (numberOfTurns === 9 && winner === false) {
      updatePlayerScore("tie");
      return;
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
