
// 1 = "Rock"
// 2 = "Paper"
// 3 = "Scissors"

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random() * (3 - 1) + 1;

    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else if (computerChoice == 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors!");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock") {
        if (computerChoice == "rock") { 
            console.log("It's a tie!");
        }
        if (computerChoice == "scissors") {
            console.log("The computer won!");
            computerScore++;
        }
        if (computerChoice == "paper") {
            console.log("The player won!");
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("The player won!");
            humanScore++;
        }
        if (computerChoice == "paper") {
            console.log("It's a tie!");
        }
        if (computerChoice == "scissors") {
            console.log("The computer won!");
            computerScore++;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("The computer won!");
            computerScore++;
        }
        if (computerChoice == "paper") {
            console.log("The player won!");
            humanScore++;
        }
        if (computerChoice == "scissors") {
            console.log("It's a tie!");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanChoice, computerChoice);
