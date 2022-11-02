"use strict";
// VARIABLES
// ---------------------------------

// Options the computer will choose from
const computerOptions = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let computerChoice;

// User starts with 0 Wins
let winsScore = 0;

// User starts with 0 Losses
let lossScore = 0;

// User starts with 9 Guesses Left
let guessesLeft = 9;

// Store Users Guesses so far
let guessesSoFar = [];

const updateComputerChoice = function () {
  computerChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
};

const startNewRound = function () {
  guessesLeft = 9;
  guessesSoFar = [];
  updateComputerChoice();
};

updateComputerChoice();
console.log(`Computer Choice: ${computerChoice}`);

// FUNCTIONS
// ---------------------------------

document.onkeyup = function (event) {
  //When the user presses a key

  const userGuess = event.key;
  console.log(`User Guess: ${userGuess}`);

  if (computerOptions.indexOf(userGuess) > -1) {
    // Only triggers when a user presses a letter key

    if (userGuess === computerChoice) {
      console.log("Success!!");

      winsScore++;
      // On a correct guess the user gets 1 point added to their "Wins" Score
      console.log(winsScore);

      // Add code to update "Wins" score using html file

      startNewRound();
      // And a new round begins

    } else if (userGuess !== computerChoice) {
      console.log("Wrong Letter!");
      guessesLeft--;
      // Their chance to guess is reduced by 1

      guessesSoFar.push(userGuess);
      // And the incorrect guess is added to the "guessesSoFar" array
    }
    if (guessesLeft === 0) {
      // If the user runs out of guesses

      lossScore++;
      // 1 point is added to their "Losses" Score

      // Add code to update "Losses" score using html file

      startNewRound();
      // And a new round begins
    }
  }

  // *********************************************************
  const scoreBoard = `<h1>The Psychic Game</h1>
    <p>Guess what letter I'm thinking of</p>
    <p>Wins: ${winsScore} </p>
    <p>Losses: ${lossScore} </p>
    <p>Guesses Left: ${guessesLeft} </p>
    <p>Guesses So Far: ${guessesSoFar.join(", ")} </p>`;

  document.querySelector("#game").innerHTML = scoreBoard;
  // *********************************************************
  // Repeats code from html file ** Get rid of this **

  /*   
  Add code to set up a new round:
  "Guesses Left:"
  "Guesses So Far:"
  and "computerChoice" should be reset together
   */
};
