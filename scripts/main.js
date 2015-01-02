var IO = require('./io/io');
var FourNumber = require('./backstage/four-number');


(function main() {
  IO.formFourNumber = FourNumber.formFourNumber();
  IO.startGame(0);
})();
