var _ = require('lodash');

function GameRule() {
}

GameRule.IsFourNotRepeat = function(array) {

  var hash = {};
  for(var i in array) {
    if(hash[array[i]])
      return true;
      hash[array[i]] = true;
    }
  return false;
};

GameRule.getScore = function(formArray, inputArray) {

  var score = { A: 0, B: 0 };
  console.log(formArray, inputArray);

  for(var i = 0; i < inputArray.length; i++) {
    if(formArray[i] === inputArray[i]) {
      score.A ++;
      continue;
    }

    if(_.contains(formArray,inputArray[i])) {
      score.B ++;
    }
  }
  return score.A + 'A' + score.B + 'B';
};


module.exports = GameRule;
