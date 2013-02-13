var file = require './tic_tac_toe.js'

var game = file.makeGame()


function printToScreen(string) {
  $('.output').append(string);
  $('.output').append("\n");
}

function clear() {
  $('.output').html("");
}

function gameLoop() {
  game.initialize();
  var players = ['X', 'O']
  printToScreen(game.showBoard())

  while (true) {
    _.each(players, function(player) {

      var inputX = prompt("place which row?");
      var inputY = prompt("place which column?");

      game.placeMark(inputX, inputY, player);
      clear();
      printToScreen(game.showBoard());

      if (game.gameWon()) {
        printToScreen("Player" + player "wins!");
      }


    }
  }
}

gameLoop();