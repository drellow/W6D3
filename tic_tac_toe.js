function makeGame() {
  return {

    initialize: function() {

      this.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
        ]
    },

    showBoard: function() {
      return this.board;
    },

    placeMark: function(x,y,mark) {
      this.board[x][y] = mark;
    },

    checkWon: function() {
      var won = false;
      var diagonals =
       [[this.board[0][0], this.board[1][1], this.board[2][2]],
        [this.board[0][2], this.board[1][1], this.board[2][0]]]

      var columns = 
        [[this.board[0][0], this.board[1][0], this.board[2][0]],
         [this.board[0][1], this.board[1][1], this.board[2][1]],
         [this.board[0][2], this.board[1][2], this.board[2][2]]]

      function checkArray(array) {
        var mark = array[0]
        if (mark == null) {
          return false;
        }
        for (i = 1; i < array.length; i++) {
          if (array[i] != mark) {
            return false;
          }
        }
        won = true;
      }

      this.board.forEach(checkArray);
      diagonals.forEach(checkArray);
      columns.forEach(checkArray);

      return won;
    }
  }
}

module.exports = {
  makeGame: makeGame
}