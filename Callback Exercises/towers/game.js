const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor(board = [[3,2,1], [], []]) {
    this.board = board;
  }

  run(completionCallback) {
    if (this.isWon()) {
      return completionCallback;
    } else {
      this.promptMove((startTowerIdx, endTowerIdx) => {
        if (this.move(startTowerIdx, endTowerIdx) === false) {
          console.log('invalid move');
        } else {
          this.move(startTowerIdx, endTowerIdx);
        }
        this.run(completionCallback);
      });
    }
  }

  promptMove(callback) {
    console.log(this.board);
    reader.question('Pick a tower to move from', (startTowerIdx) => {
      reader.question('Pick a tower to move to', (endTowerIdx) => {
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (this.board[endTowerIdx].length === 0) {
      return true;
    } else if (this.board[startTowerIdx][-1] < this.board[endTowerIdx][-1]) {
      return true;
    } else {
      return false;
    }
  }

  print() {
    console.log(JSON.stringify(this.board));
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.board[endTowerIdx].push(this.board[startTowerIdx].pop());
      return true;
    }
    return false;
  }

  isWon() {
    if (this.board[1].length === 3 || this.board[2].length === 3) {
      return true;
    } else {
      return false;
    }
  }
}

game = new Game();

game.run(console.log('you won'));

// console.log(game.isValidMove(1, 0));
