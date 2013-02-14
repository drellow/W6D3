var game = playSnake.game();
var snake = playSnake.snake();

function printToScreen(string) {
  $('.output').append(string);
  $('.output').append("\n");
}

function clear() {
  $('.output').html("");
}



STEP_TIME_MILLIS = 250;
function runLoop() {
  game.initialize();
  snake.initialize();

  game.showBoard();
  parseKeydown();

  confirm("start game?");

  window.setTimeout(runStep, STEP_TIME_MILLIS);
}

function parseKeydown() {
  $('html').keydown(function (event) {
    switch (event.keyCode) {
      case 38:
        snake.turn("up")
        break;
      case 40:
        snake.turn("down")
        break;
      case 37:
        snake.turn("left")
        break;
      case 39:
        snake.turn("right")
        break;
      // default:
      //   console.log(event);
      //   console.log(event.keyCode);
    }
  })
}

function runStep() {
  clear();
  snake.step();
  game.showBoard();

  window.setTimeout(runStep, STEP_TIME_MILLIS);
}

runLoop();