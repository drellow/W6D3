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
      _.each(this.board, function(row, i){
        row_string = " ";
        _.each(row, function(element, j) {
          if (element == null) {
            row_string += " ";
          } else {
            row_string += element;
          }

          if (j != 2) {
            row_string += "|"
          }
        })
        printToScreen((i + 1) + row_string);

        if (i != 2) {
          printToScreen("  -----");
        }
      });
      
      printToScreen("  1 2 3");
    },

    placeMark: function(x,y,mark) {
      this.board[x-1][y-1] = mark;
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

if (!(typeof module == 'undefined')) {
  module.exports = {
    makeGame: makeGame
  };
} else {
  var tic_tac_toe = {
    makeGame: makeGame
  };
}