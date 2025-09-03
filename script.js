
// 1 = "Rock"
// 2 = "Paper"
// 3 = "Scissors"

let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

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

    if (humanChoice == "rock") {
        if (computerChoice == "rock") { 
            console.log("It's a tie!");
        }
        if (computerChoice == "scissors") {
            console.log("The computer won!");
            computerScore++;
            //computerScoreDisplay.appendChild(document.createTextNode(parseInt(computerSCore)));
            computerScoreDisplay.textContent = parseInt(computerScore);
        }
        if (computerChoice == "paper") {
            console.log("The player won!");
            humanScore++;
            //humanScoreDisplay.appendChild(document.createTextNode(parseInt(humanScore)));
            humanScoreDisplay.textContent = parseInt(humanScore);
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("The player won!");
            humanScore++;
            humanScoreDisplay.textContent = parseInt(humanScore);
        }
        if (computerChoice == "paper") {
            console.log("It's a tie!");
        }
        if (computerChoice == "scissors") {
            console.log("The computer won!");
            computerScore++;
            computerScoreDisplay.textContent = parseInt(computerScore);
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("The computer won!");
            computerScore++;
            computerScoreDisplay.textContent = parseInt(computerScore);
        }
        if (computerChoice == "paper") {
            console.log("The player won!");
            humanScore++;
            humanScoreDisplay.textContent = parseInt(humanScore);
        }
        if (computerChoice == "scissors") {
            console.log("It's a tie!");
        }
    }
}

function playGame(choice) {
    //let humanSelection = getHumanChoice();
    let humanSelection = choice;
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    if (humanScore >= 5) {
        console.log("The Player has won the entire game!");
        return;
    } else if (computerScore >= 5) {
        console.log("The Computer has won the entire game!");
        return;
    }
}

// Get the button objects
const paperButton = document.getElementById("paper");
const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissors");

// Create event listeners from the buttons
paperButton.addEventListener("click", function() {
    playGame("paper");
});
rockButton.addEventListener("click", function() {
    playGame("rock")
});
scissorsButton.addEventListener("click", function() {
    playGame("scissors")
});
