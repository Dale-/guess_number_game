var _ = require('lodash');
var readline = require('readline');
var GameRule = require('../game-rule/game-rule');

var times = 0;
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Input() {
  this.inputArray = [];
}

Input.consoleInput = function() {
  times ++;

  rl.question('Please input four number : \n', function(answer) {
  this.inputArray = Input.invertIntType(answer.split(''));

  if(GameRule.IsFourNotRepeat(this.inputArray)) {
    console.log('Repeat!');
    Input.consoleInput();
    return;
  }

  var score = GameRule.getScore([1,2,3,4], this.inputArray);

  if(score === '4A0B') {
    console.log('Congratulation!');
    process.exit(0);
    return ;
  }else {
    if(times === 6) {
      console.log('Game Over');
      process.exit(0);
    }
    console.log(score);
    Input.consoleInput();
  }

  // (score === '4A0B') ? Input.showCongratulation() : Input.showScore();

  });
};

Input.showScore = function() {
  console.log(score);
  Input.consoleInput();
};

Input.showCongratulation = function() {
  console.log('Congratulation!');
  process.exit(0);
};

Input.showGameOver = function() {
  console.log('Game Over!');
  process.exit(0);
};

Input.invertIntType = function(array) {

  for(var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
  return array;
};

module.exports = Input;
