"use strict";

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

const updateGuessesLeft = function () {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

const updateGuessesSoFar = function () {
  document.querySelector("#guesses-so-far").innerHTML = guessesSoFar.join(", ");
}

const startNewRound = function () {
  guessesLeft = 9;
  guessesSoFar = [];
  updateGuessesLeft();
  updateComputerChoice();
  updateGuessesSoFar();
};

startNewRound();

document.onkeyup = function (event) {
  //When the user presses a key

  const userGuess = event.key;

  if (computerOptions.indexOf(userGuess) > -1) {
    // Only triggers when a user presses a letter key

    if (userGuess === computerChoice) {

      winsScore++;
      // On a correct guess the user gets 1 point added to their "Wins" Score

      document.querySelector("#wins").innerHTML = winsScore;

      startNewRound();
      // And a new round begins
    } else if (userGuess !== computerChoice) {
      guessesLeft--;
      // Their chance to guess is reduced by 1

      updateGuessesLeft();

      guessesSoFar.push(userGuess);
      updateGuessesSoFar()
      // And the incorrect guess is added to the "guessesSoFar" array
    }
    if (guessesLeft === 0) {
      // If the user runs out of guesses

      lossScore++;
      // 1 point is added to their "Losses" Score

      document.querySelector("#losses").innerHTML = lossScore;

      startNewRound();
      // And a new round begins
    }
  }
};
