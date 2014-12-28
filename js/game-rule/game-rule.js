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
    }
  }

  return false;
};

GameRule.getAorBorC = function(fourNumber, index, value) {

  return _.contains(fourNumber, value) ?
                   (fourNumber.indexOf(value) === index ? 'A' : 'B'): 'C';
};

GameRule.getScore = function(formArray, inputArray) {
  return '4A0B';
};


module.exports = GameRule;
