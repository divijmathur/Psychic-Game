var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

window.onload = function(event) {
    var computer = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    computerGuess.push(computer);
    console.log(computerGuess[0]);
    
}

document.onkeyup = function(event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    console.log(computerGuess[0]);


if((playerGuess == computerGuess[0]) && (guessesLeft > 0)) {
    wins++;
    guessesLeft = 9;
    lettersGuessed.length=0;
    computerGuess.length=0;
    var computer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(computer);
    console.log(computerGuess[0]);
}

else if((playerGuess != computerGuess) && (guessesLeft > 0)) {
    guessesLeft -= 1;
}

else {
    losses++;
    guessesLeft = 9;
    lettersGuessed.length=0;
    computerGuess.length=0;
    var computer = computerChoices[Math.floor(Math.random()* computerChoices.length)];
    computerGuess.push(computer);
    console.log(computerGuess[0]);
}

var html = "<p>Guess what letter I'm thinking of </p>"
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "<p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your guesses so far: " + lettersGuessed + "</p>";

document.querySelector("#game").innerHTML = html;
}