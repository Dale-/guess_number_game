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


GameRule.getAorBorC = function(fourNumber, index, value) {
  return _.contains(fourNumber, value) ?
                   (fourNumber.indexOf(value) === index ? 'A' : 'B'): 'C';
};


GameRule.getScore = function(formArray, inputArray) {
  var score = { A: 0, B: 0 };

  _.forEach(inputArray, function(number) {
    switch(GameRule.getAorBorC(formArray, inputArray.indexOf(number), number)) {
      case 'A':
        score.A ++;
        break;

      case 'B':
        score.B ++;
        break;

      default:
        break;
    }
  });
  return score.A + 'A' + score.B + 'B';
};


module.exports = GameRule;
