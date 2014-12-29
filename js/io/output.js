function Output() {
}

Output.show = function(score) {

  if(score === '4A0B'){
    console.log('Congratulation');
    process.exit(0);
  } else if(score === 'Game Over') {
    console.log('Game Over');
    process.exit(0);
  } else {
    console.log(score);
  }
};

module.exports = Output;
