const Game = (() => {
  //Creates a gameboard
  const createGameboard = (boardSize) => {
    let board;
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        board[i][j] = "";
      }
    }
    return board;
  };

  const Player = (playerChoice) => {
    return { playerChoice };
  };
})();
