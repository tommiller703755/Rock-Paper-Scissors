
// 1 = "Rock"
// 2 = "Paper"
// 3 = "Scissors"

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

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

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    if (humanScore >= 5) {
        console.log("The Player has won the entire game!");
        return;
    } else if (computerScore >= 5) {
        console.log("The Computer has won the entire game!");
        return;
    }

    playGame();
}

playGame();
