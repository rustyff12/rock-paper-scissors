// Selecting elements fo rock, paper, scissors, results and score
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const resultsDiv = document.querySelector('.results');
const scoreDiv = document.querySelector('.score');
// const resetGame = document.querySelector('.reset');

// Set scores to 0 for start of game
let playerScore = 0;
let computerScore = 0;

// Function for computer choice turned from a random number between 1 and 3
// into rock, paper or scissors
function getComputerChoice() {

    // Random number generation for corresponding choices
    let result = Math.floor(Math.random() * 3) + 1;

    if (result === 1) {
        result = "rock";
    } else if (result === 2) {
        result = "paper";
    } else if (result === 3) {
        result = "scissors";
    } else {
        console.log("There is a problem")
    }
    return result;

}


// Function to take the game logic, what beats what. 
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a Tie";
    } else if (
        (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`;
    } else {
        computerScore++;
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
    }
};

// Function to update the UI with results and scores
const updateUI = (result => {
    resultsDiv.textContent = result;
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    // Winner when player or computer reaches 5 points
    if(playerScore === 5) {
        resultsDiv.textContent = "Congratulations! You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.textContent = "Sorry, you lost. The computer wins the game.";
        disableButtons();
    }
});

// Function to disable buttons after game ends
const disableButtons = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
};

// Event listeners for button clicks/user input and reset game
rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound("rock", computerSelection);
    updateUI(result);
});

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound("paper", computerSelection);
    updateUI(result);
});

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound("scissors", computerSelection);
    updateUI(result);
});


/* =========================================================== */

// Later, add ability for game reset
// resetGame.addEventListener('click', () => {

// })




