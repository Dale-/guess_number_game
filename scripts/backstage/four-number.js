var _ = require('lodash');

function FourNumber() {
  this.fourNumber = [];
}

FourNumber.formFourNumber = function() {

  this.fourNumber=[0,1,2,3,4,5,6,7,8,9];
  this.fourNumber.sort(function arrSort(a,b){
    return Math.random() > 0.5 ? a-b : b-a;
  });

  this.fourNumber.length = 4;

  return this.fourNumber;
};

module.exports = FourNumber;
