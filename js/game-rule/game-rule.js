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
  if(_.contains(fourNumber, value)) {
    if(fourNumber.indexOf(value) === index) {
      return 'A';
    } else {
      return 'B';
    }
  } else {
    return 'C';
  }
};

GameRule.getScore = function() {
  return '1A0B';
};

GameRule.isSixTimes = function() {
  return false;
};

module.exports = GameRule;
