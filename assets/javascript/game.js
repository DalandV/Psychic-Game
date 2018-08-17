
// VARIABLES
// ---------------------------------

// Computer chooses random letter
var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
// console.log(computerChoice)

// User starts with 0 Wins
var winsScore = 0;

// User starts with 0 Losses
var lossScore = 0;

// User starts with 9 Guesses Left
var guessesLeft = 9;

// Store Users Guesses so far
var guessesSoFar = [];

// FUNCTION
// ---------------------------------

document.onkeyup = function (event) {

    var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerChoice)

    var userGuess = event.key;
    console.log(userGuess)

    if (computerOptions.indexOf(userGuess) > -1) {
        if (userGuess === computerChoice) {
            console.log("Success!!");
            winsScore++;
            console.log(winsScore);
            guessesLeft = 9;
            guessesSoFar = [];

        }
        else if (userGuess !== computerChoice) {
            console.log("Wrong Letter!");
            guessesLeft--;
            guessesSoFar.push(userGuess);
        }
        if (guessesLeft === 0) {
            guessesLeft = 9;
            lossScore++;
            guessesSoFar = [];
        }
    }
    
    var scoreBoard =

        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + winsScore + "</p>" +
        "<p>Losses: " + lossScore + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses So Far: " + guessesSoFar.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = scoreBoard;
}