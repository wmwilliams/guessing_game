 var Game = function() {
  var userGuess;
  this.answer = 24;
  this.guess = function() {
    userGuess = prompt("See if you can guess how old I am but be careful you can only have 2 guesses....");
  }
  this.response = function() {
    if(userGuess != this.answer){
    userGuess = prompt("Nice try, but try again")
    }if(userGuess == this.answer){
    document.getElementById('title').textContent = "Good job, you got it!";
    }
  }
 }
var game = new Game();
game.guess();
game.response();
