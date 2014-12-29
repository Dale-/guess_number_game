var _ = require('lodash');
var readline = require('readline');
var GameRule = require('../game-rule/game-rule');

var times = 0;
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function IO() {
  this.inputArray = [];
}

IO.consoleInput = function() {
  times ++;

  rl.question('Please input four number : \n', function(answer) {
  this.inputArray = IO.invertIntType(answer.split(''));

  if(GameRule.IsFourNotRepeat(this.inputArray)) {
    IO.showRepeat();
  }

  var score = GameRule.getScore([1,2,3,4], this.inputArray);

  if(score === '4A0B') {
    IO.showCongratulation();
  }else {
    if(times === 6) {
      IO.showGameOver();
    }
    IO.showScore(score);
  }

  //(score === '4A0B') ? (Input.showCongratulation()) : (Input.showScore());

  });
};

IO.showRepeat = function() {
  console.log('Repeat!');
  IO.consoleInput();
};

IO.showScore = function(score) {
  console.log(score);
  IO.consoleInput();
};

IO.showCongratulation = function() {
  console.log('Congratulation!');
  process.exit(0);
};

IO.showGameOver = function() {
  console.log('Game Over!');
  process.exit(0);
};

IO.invertIntType = function(array) {

  for(var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
  return array;
};

module.exports = IO;
