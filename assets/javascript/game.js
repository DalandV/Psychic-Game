
// VARIABLES
// ---------------------------------

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerChoices)

// Start with 0 Wins
var winsScore = 0;

// Start with 0 Losses
var lossScore = 0;

// Start with 9 Guesses Left
var guessesLeft = 9;

// Store Guesses so far
var guessesSoFar = "Your Guesses so far: ";

document.getElementById('guesses-so-far').innerHTML = "Your Guesses so far: ";