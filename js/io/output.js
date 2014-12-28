function Output() {
}

Output.show = function(content) {
  
  console.log(content);
  if(content === 'Congratulation' || content === 'Game Over') {
    process.exit(0);
  }
};

module.exports = Output;
