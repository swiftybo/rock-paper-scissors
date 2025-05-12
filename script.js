"use strict";

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

// // This does not work as this code apples across all buttons. We need specific values to be returned for each of the buttons
// const buttons = document.querySelectorAll(".button");
// console.log(buttons);

// const getHumanChoice = function () {
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//       console.log("The button is clicked");
//     });
//   }
// };

// getHumanChoice(buttons);

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let message = document.querySelector(".message");
let userScore = document.querySelector(".player");
let compScore = document.querySelector(".computer");

const getHumanChoice = function () {
  if (
    rock.addEventListener("click", function () {
      return rock;
    })
  );
  else if (
    paper.addEventListener("click", () => {
      return paper;
    })
  );
  else if (
    scissors.addEventListener("click", () => {
      return scissors;
    })
  );
};

let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  console.log(computerChoice, typof(computerChoice));
  console.log(humanChoice, typeof humanChoice);

  if (computerChoice === humanChoice) {
    message.textContent = "There is no winner! You both picked the same.";
    // return undefined;
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    message.textContent = "Player wins! Paper beats rock.";
    return "player";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    message.textContent = "Computer wins! Paper beats rock.";
    return "computer";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    message.textContent = "Computer wins! Scissors beats paper.";
    return "computer";
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    message.textContent = "Player wins! Scissors beats paper.";
    return "player";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    message.textContent = "Computer wins! Rock beats scissors.";
    return "computer";
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    message.textContent = "Player wins! Rock beats scissors.";
    return "player";
  }
}

let winner = playRound(getComputerChoice(), getHumanChoice());

if (winner == "player") {
  playerScore += 1;
} else if (winner == "computer") {
  computerScore += 1;
}

userScore.textContent = `Player: ${playerScore}`;
compScore.textContent = `Computer: ${computerScore}`;

// Initial Code before introducing UI:

// const getHumanChoice = function() {
//     return (prompt("Are you going to play 'rock', 'paper' or 'scissors'?: ").toLowerCase())
// }

// // const trackScore = (winner, manScore, compScore) => {
// //     if (winner === "compWin") {
// //         compScore += 1;
// //     } else if (winner === "manWin") {
// //         manScore += 1;
// //     }
// // }

// function playGame() {

//     let humanScore = 0;
//     let computerScore = 0;
//     // let roundWinner = undefined

//     function playRound(computerChoice, humanChoice) {
//         console.log(`The computer chose ${computerChoice}`)
//         if (computerChoice === humanChoice) {
//             alert("There is no winner! You both picked the same.");
//             return undefined;
//         } else if (computerChoice === "rock" && humanChoice === "paper") {
//             alert("You win! Paper beats rock.");
//             humanScore += 1;
//         } else if (computerChoice === "paper" && humanChoice === "rock") {
//             alert("Computer wins! Paper beats rock.");
//             computerScore += 1;
//         } else if (computerChoice === "scissors" && humanChoice === "paper") {
//             alert("Computer wins! Scissors beats paper.");
//             computerScore += 1;
//         } else if (computerChoice === "paper" && humanChoice === "scissors") {
//             alert("You win! Scissors beats paper.");
//             humanScore += 1;
//         } else if (computerChoice === "rock" && humanChoice === "scissors") {
//             alert("Computer wins! Rock beats scissors.");
//             computerScore += 1;
//         } else if (computerChoice === "scissors" && humanChoice === "rock") {
//             alert("You win! Rock beats scissors.")
//             humanScore += 1;
//         }
//     }

//     //roundWinner = playRound(getComputerChoice(), getHumanChoice());
//     playRound(getComputerChoice(), getHumanChoice());
//     // trackScore(roundWinner, humanScore, computerScore);
//     console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)

//     playRound(getComputerChoice(), getHumanChoice());
//     // trackScore(roundWinner, humanScore, computerScore);
//     console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)

//     playRound(getComputerChoice(), getHumanChoice())
//     console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)

//     playRound(getComputerChoice(), getHumanChoice())
//     console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)

//     playRound(getComputerChoice(), getHumanChoice())
//     console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)

//     console.log(`And the final scores are in!\nComputer Score: ${computerScore}. Human Score: ${humanScore}`)
// }

// playGame()
