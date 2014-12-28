// var readline = require('readline');
// var GameRule = require('../game-rule/game-rule');

function Input() {
  this.inputArray = [];
}

// Input.prototype.consoleInput = function() {
//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//
//   rl.question("Please input four number : \n", function(answer) {
//
//     var array = answer.split('');
//
//     this.inputArray = Input.invertIntType(array);
//
//     console.log(GameRule.getScore([1,2,3,4], this.inputArray));
//
//     //rl.close();
//
//   });
//   return this.inputArray;
// };

Input.invertIntType = function(array) {

  for(var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
  return array;
};

module.exports = Input;
