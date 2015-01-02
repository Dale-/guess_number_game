var _ = require('lodash');
var readline = require('readline');
var GameRule = require('../game-rule/game-rule');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function IO() {
  this.inputArray = [];
  this.formFourNumber = [];
}

IO.startGame = function(times) {


  console.log('Please input four number:');

  rl.on('line', function(input) {

    times ++;
    this.inputArray = IO.invertIntType(_.toArray(input));

    if(GameRule.IsFourNotRepeat(this.inputArray)) {
      console.log('Repeat!\nPlease input four number:');
      return;
    }

    var score = GameRule.getScore([4,3,8,1], this.inputArray);

    if(score === '4A0B') {
      console.log('Congratulation!');
      process.exit(0);

    } else if(times === 6) {
      console.log('Game Over!');
      process.exit(0);

    } else {
      console.log(score);
      console.log('Please input four number:');
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
