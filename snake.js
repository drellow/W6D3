function snake() {
  return {

    initialize: function() {
      this.body = [[1,1],[2,1], [3,1]];
    },

    direction: [1, 0],

    turn: function(dir) {
      switch (dir) {
        case "up":
          this.direction = [-1,0]
          break;
        case "down":
          this.direction = [1, 0]
          break;
        case "left":
          this.direction = [0,-1]
          break;
        case "right":
          this.direction = [0, 1]
          break;
      }
    },

    grow: function() {
      this.body.push(this.newPos());
    },

    newPos: function() {
      var that = this;
      var oldPos = _.last(that.body);
      var newPos = _.map(oldPos, function(coord, i) {
        return coord += that.direction[i];
      })
      return newPos;
    },

    step: function() {
      console.log(this.body)
      this.body.shift();
      this.body.push(this.newPos());
      console.log(this.body)
    }
  }
}

function game() {
  return {

    initialize: function() {
      this.board = [];
      var that = this;

      _.times(40, function() {
        var row = [];
        _.times(40, function() {
          row.push(" ");
        })
        that.board.push(row);
      })
    },

    showBoard: function() {
      this.putSnakeInBoard();

      var bar = " ";
      _.times(79, function() { bar += "-" });
      printToScreen(bar);

      _.each(this.board, function(row) {
        printToScreen("|" + row + "|")
      })

      printToScreen(bar);
    },

    putSnakeInBoard: function() {
      this.initialize();

      var that = this;

      _.each(snake.body, function(coords) {
       that.board[coords[0]][coords[1]] = "*";
      })
    }
  }
}

var playSnake = {
    snake: snake,
    game: game
  };


