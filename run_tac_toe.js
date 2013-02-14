
var game = tic_tac_toe.makeGame();


function printToScreen(string) {
  $('.output').append(string);
  $('.output').append("\n");
}

function clear() {
  $('.output').html("");
}

printToScreen(game);

function gameLoop() {
  game.initialize();
  var players = ['X', 'O'];
  printToScreen(game.showBoard());
  var playing = true

  while (playing == true) {
    _.each(players, function(player) {

      var inputX = prompt("place which row?");
      var inputY = prompt("place which column?");

      game.placeMark(inputX, inputY, player);
      clear();
      printToScreen(game.showBoard());

      if (game.checkWon() == true) {
        printToScreen("Player " + player + " wins!");
        playing = false
      }
    })
  }
}

gameLoop();