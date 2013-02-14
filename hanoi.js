var _ = require('underscore');

function makeTowers() {

  return {
    initialize: function() {
      this.towers =
        [[4, 3, 2, 1],
         [],
         []];
    },

    showTowers: function() {
      return this.towers;
    },

    moveDisc: function(a, b) {
      if (validMove(a, b) == true) {
        this.towers[b].push(this.towers[a].pop());
      }

      function validMove(a, b) {
        if (this.towers[a].length == 0) {
          return false;
        } else if (this.towers[b].length == 0) {
          return true;
        } else if (_.last(this.towers[a]) < _.last(this.towers[b])) {
          return true;
        } else {
          return false;
        }
      }
    },

    checkWon: function() {
      return this.towers[1].length == 4 || this.towers[2].length == 4;

    }

  }

}