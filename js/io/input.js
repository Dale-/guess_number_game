function Input() {
  this.inputArray = [];
}

Input.prototype.consoleInput = function() {
  return this.inputArray;
};

module.exports = Input;
