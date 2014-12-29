var IO = require('./io/io');
var FourNumber = require('./backstage/four-number');


(function main() {
  //var io = new IO();
  IO.formFourNumber = FourNumber.formFourNumber();
  IO.consoleInput();
})();

//exports.main = main;
