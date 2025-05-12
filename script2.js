"use strict";

// 1. get human choice
// 2. get computer choice
// 3. create playround() function which determines winner & increments score
// 4. play game until someone reaches score of 5

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

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let message = document.querySelector(".message");

let playerScore = document.querySelector(".player");
let computerScore = document.querySelector(".computer");

const playGame = function () {
  let userScore = 0;
  let compScore = 0;

  rock.addEventListener("click", function () {
    if (compScore == 5) {
      return (message.textContent = "Computer wins the whole game!");
    } else if (userScore == 5) {
      return (message.textContent = "Player wins the whole game!");
    } else {
      let playerSelection = "rock";
      console.log(playerSelection);
      let computerSelection = getComputerChoice();
      console.log(computerSelection);
      playRound(playerSelection, computerSelection);
      playerScore.textContent = userScore;
      computerScore.textContent = compScore;
    }
  });

  paper.addEventListener("click", function () {
    if (compScore == 5) {
      return (message.textContent = "Computer wins the whole game!.");
    } else if (userScore == 5) {
      return (message.textContent = "Player wins the whole game!.");
    } else {
      let playerSelection = "paper";
      console.log(playerSelection);
      let computerSelection = getComputerChoice();
      console.log(computerSelection);
      playRound(playerSelection, computerSelection);
      playerScore.textContent = userScore;
      computerScore.textContent = compScore;
    }
  });

  scissors.addEventListener("click", function () {
    if (compScore == 5) {
      return (message.textContent = "Computer wins the whole game!.");
    } else if (userScore == 5) {
      return (message.textContent = "Player wins the whole game!.");
    } else {
      let playerSelection = "scissors";
      console.log(playerSelection);
      let computerSelection = getComputerChoice();
      console.log(computerSelection);
      playRound(playerSelection, computerSelection);
      playerScore.textContent = userScore;
      computerScore.textContent = compScore;
    }
  });

  function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
      message.textContent = "There is no winner! You both picked the same.";
      // return undefined;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
      message.textContent = "Player wins! Paper beats rock.";
      return (userScore += 1);
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      message.textContent = "Computer wins! Paper beats rock.";
      return (compScore += 1);
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      message.textContent = "Computer wins! Scissors beats paper.";
      return (compScore += 1);
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      message.textContent = "Player wins! Scissors beats paper.";
      return (userScore += 1);
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      message.textContent = "Computer wins! Rock beats scissors.";
      return (compScore += 1);
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      message.textContent = "Player wins! Rock beats scissors.";
      return (userScore += 1);
    }
  }
};

playGame();
