var readline = require('readline');
var GameRule = require('../game-rule/game-rule');

function Input() {
  this.inputArray = [];
}

Input.prototype.consoleInput = function() {
  var score = '';
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Please input four number : \n", function(answer) {

    this.inputArray = Input.invertIntType(answer.split(''));

    score = GameRule.getScore([1,2,3,4], this.inputArray);

    console.log(score);
    //process.exit(0);
    //rl.close();

  });
  return score;
};

Input.invertIntType = function(array) {

  for(var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
  return array;
};

module.exports = Input;
