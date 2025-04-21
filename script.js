"use strict"

function getComputerChoice() {
    const random_number = Math.floor((Math.random() * 3) + 1)

    if (random_number === 1) {
        return "rock";
    } else if (random_number === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


const getHumanChoice = function() {
    return (prompt("Are you going to play 'rock', 'paper' or 'scissors'?: ").toLowerCase())
}


// const trackScore = (winner, manScore, compScore) => {
//     if (winner === "compWin") {
//         compScore += 1;
//     } else if (winner === "manWin") {
//         manScore += 1;
//     }
// }


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    // let roundWinner = undefined

    function playRound(computerChoice, humanChoice) {
        console.log(`The computer chose ${computerChoice}`)
        if (computerChoice === humanChoice) {
            alert("There is no winner! You both picked the same.");
            return undefined;
        } else if (computerChoice === "rock" && humanChoice === "paper") {
            alert("You win! Paper beats rock.");
            humanScore += 1;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            alert("Computer wins! Paper beats rock.");
            computerScore += 1;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            alert("Computer wins! Scissors beats paper.");
            computerScore += 1;
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            alert("You win! Scissors beats paper.");
            humanScore += 1;
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            alert("Computer wins! Rock beats scissors.");
            computerScore += 1;
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            alert("You win! Rock beats scissors.")
            humanScore += 1;
        }
    }

    //roundWinner = playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    // trackScore(roundWinner, humanScore, computerScore);
    console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)

    playRound(getComputerChoice(), getHumanChoice());
    // trackScore(roundWinner, humanScore, computerScore);
    console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)

    playRound(getComputerChoice(), getHumanChoice())
    console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)
    
    playRound(getComputerChoice(), getHumanChoice())
    console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)

    playRound(getComputerChoice(), getHumanChoice())
    console.log(`Computer Score: ${computerScore}. Human Score: ${humanScore}`)

    console.log(`And the final scores are in!\nComputer Score: ${computerScore}. Human Score: ${humanScore}`)
}

playGame()