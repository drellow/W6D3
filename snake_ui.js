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

function userInterface() {
  $('#pauseButton').click(function() {
    alert("Game Paused");
  });

  $('#startButton').click(function() {
    $('body').addClass('running')
    kickOff();
  });

  $('#newButton').click(function() {
    $('body').removeClass('newGame');
    $('body').addClass('running')
    kickOff();
  });
}

function kickOff() {
  clear();
  snake.initialize();
  game.createApple();
  game.showBoard(" ");
  parseKeydown();
  runStep();
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
    }
  })
}

function runStep() {
  var cont = true
  clear();
  snake.step();
  if (game.over() == true) {
    clear();
    game.showBoard("X");
    cont = false
    $('body').removeClass('running');
    $('body').addClass('newGame');
  }

  if (game.hitApple() == true) {
    snake.grow();
    game.createApple();
  }

  if (cont == true) {
    game.showBoard(" ");
    window.setTimeout(runStep, STEP_TIME_MILLIS);
  }
}

userInterface();

