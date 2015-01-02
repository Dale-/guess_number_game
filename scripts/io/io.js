var _ = require('lodash');
var readline = require('readline');
var GameRule = require('../game-rule/game-rule');

function IO() {
  this.inputArray = [];
  this.formFourNumber = [];
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

IO.startGame = function(times) {

  times ++;
  console.log('Please input four number:');

  rl.on('line', function(input) {

    this.inputArray = IO.invertIntType(_.toArray(input));

    if(GameRule.IsFourNotRepeat(this.inputArray)) {
      console.log('Repeat!');
      IO.startGame(times);
      return;
    }

    var score = GameRule.getScore([4,3,8,1], this.inputArray);

    if(score === '4A0B') {
      console.log('Congratulation!');
      process.exit(0);

    } else if(times === 6) {
      console.log('Game Over!');
      rl.close();

    } else {
      console.log(score);
      IO.startGame(times);
    }
  });
};

IO.invertIntType = function(array) {

  for(var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
  return array;
};

module.exports = IO;
