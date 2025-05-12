"use strict";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let message = document.querySelector(".message");

let playerScore = document.querySelector(".player");
let computerScore = document.querySelector(".computer");

function playGame() {
  let playing = true;
  let userScore = 0;
  let compScore = 0;
  let winner;

  rock.addEventListener("click", function () {
    if (playing) {
      let playerSelection = "rock";
      winner = playRound(playerSelection);
      if (winner === "player") {
        userScore += 1;
      } else if (winner === "computer") {
        compScore += 1;
      }
      playerScore.textContent = userScore;
      computerScore.textContent = compScore;
    }
    if (userScore === 5) {
      message.textContent = "Player wins the game!";
      playing = false;
    } else if (compScore === 5) {
      message.textContent = "Computer wins the game!";
      playing = false;
    }
  });

  paper.addEventListener("click", function () {
    if (playing) {
      let playerSelection = "paper";
      winner = playRound(playerSelection);
      if (winner === "player") {
        userScore += 1;
      } else if (winner === "computer") {
        compScore += 1;
      }
      playerScore.textContent = userScore;
      computerScore.textContent = compScore;
    }
    if (userScore === 5) {
      message.textContent = "Player wins the game!";
      playing = false;
    } else if (compScore === 5) {
      message.textContent = "Computer wins the game!";
      playing = false;
    }
  });

  scissors.addEventListener("click", function () {
    if (playing) {
      let playerSelection = "scissors";
      winner = playRound(playerSelection);
      if (winner === "player") {
        userScore += 1;
      } else if (winner === "computer") {
        compScore += 1;
      }
      playerScore.textContent = userScore;
      computerScore.textContent = compScore;
    }
    if (userScore === 5) {
      message.textContent = "Player wins the game!";
      playing = false;
    } else if (compScore === 5) {
      message.textContent = "Computer wins the game!";
      playing = false;
    }
  });
}

playGame();

const playRound = function (playerHand) {
  const computerHand = getComputerChoice();
  console.log(playerHand);
  console.log(computerHand);

  if (computerHand === playerHand) {
    message.textContent = "no winner this round";
  } else if (computerHand === "rock" && playerHand === "paper") {
    message.textContent = "player wins";
    return "player";
  } else if (computerHand === "paper" && playerHand === "rock") {
    message.textContent = "computer wins";
    return "computer";
  } else if (computerHand === "scissors" && playerHand === "paper") {
    message.textContent = "computer wins";
    return "computer";
  } else if (computerHand === "paper" && playerHand === "scissors") {
    message.textContent = "player wins";
    return "player";
  } else if (computerHand === "rock" && playerHand === "scissors") {
    message.textContent = "computer wins";
    return "computer";
  } else if (computerHand === "scissors" && playerHand === "rock") {
    message.textContent = "player wins";
    return "player";
  }
};

function getComputerChoice() {
  const random_number = Math.floor(Math.random() * 3 + 1);

  if (random_number === 1) {
    return "rock";
  } else if (random_number === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function checkScore() {}
