var BOARD_SIZE = 20;

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
      this.body.shift();
      this.body.push(this.newPos());
    }
  }
}

function game() {
  return {

    makeBoard: function(str) {
      this.board = [];
      var that = this;

      _.times(BOARD_SIZE, function() {
        var row = [];
        _.times(BOARD_SIZE, function() {
          row.push(str);
        })
        that.board.push(row);
      })
      this.board[this.apple[0]][this.apple[1]] = "O";
    },

    showBoard: function(str) {
      this.makeBoard(str);
      this.putSnakeInBoard();

      var bar = " ";
      _.times(((BOARD_SIZE * 2) - 1), function() { bar += "-" });
      printToScreen(bar);

      _.each(this.board, function(row) {
        printToScreen("|" + row + "|")
      })

      printToScreen(bar);
    },

    putSnakeInBoard: function() {

      var that = this;

      _.each(snake.body, function(coords) {
       that.board[coords[0]][coords[1]] = "*";
      })
    },

    over: function() {
      var snakeHead = _.last(snake.body);

      if (this.offBoard(snakeHead) == true || this.hitSelf(snakeHead) == true) {
        return true;
      }
      return false;
    },

    offBoard: function(snakeHead) {
      var off = false
      _.each(snakeHead, function(coord) {
        if (coord < 0 || coord >= BOARD_SIZE) {
          off = true;
          snake.body.pop();
        }
      })
      return off;
    },

    hitSelf: function(snakeHead) {
      var hit_self = false;

      for (i = 0; i < (snake.body.length - 1); i++) {
        var hit = true;
        _.each(snake.body[i], function(coord, i) {
          if (coord != snakeHead[i]) {
            hit = false;
          }
        })
        if (hit == true) {
          hit_self = true;
        }
      }
      return hit_self;
    },

    createApple: function() {
      var coordX = Math.floor(Math.random() * BOARD_SIZE);
      var coordY = Math.floor(Math.random() * BOARD_SIZE);

      this.apple = [coordX, coordY];
    },

    hitApple: function() {
      var that = this;
      var hit = true
      var snakeHead = _.last(snake.body);
      _.each(snakeHead, function(coord, i) {
        if (coord != that.apple[i]) {
          hit = false;
        }
      })
      return hit;
    }
  }
}

var playSnake = {
    snake: snake,
    game: game
  };


