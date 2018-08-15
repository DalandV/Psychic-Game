
// VARIABLES
// ---------------------------------

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerChoices)

// Start with 0 Wins
var winsScore = document.getElementById('wins').innerHTML = "Wins: " + 0;

// Start with 0 Losses
var lossScore = document.getElementById('losses').innerHTML = "Lossed: " + 0;

// Start with 9 Guesses Left
var guessesLeft = document.getElementById('guesses-left').innerHTML = "Guesses Left: " + 9;

// Store Guesses so far
var guessesSoFar = document.getElementById('guesses-so-far').innerHTML = "Your Guesses so far: ";

