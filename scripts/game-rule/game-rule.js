var _ = require('lodash');


function GameRule() {
}


GameRule.IsFourNotRepeat = function(array) {
  var orderArray = array.sort();
  for(var i = 0; i < orderArray.length - 1; i++)
  {
    if (orderArray[i] === orderArray[i+1])
    {
      return true;
    }}
  return false;
};


GameRule.getScore = function(formArray, inputArray) {
  var score = { A: 0, B: 0 };

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
