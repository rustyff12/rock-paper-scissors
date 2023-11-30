// let rock = 1;
// let paper = 2;
// let scissors = 3;


// Function for computer choice turned from a random number between 1 and 3
// into rock, paper or scissors
function getComputerChoice() {

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
// getComputerChoice();


// Function to take the game logic, what beats what. 
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() ===  computerSelection) {
        return "It's a Tie";
    } else {
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`;
    }
}

// console.log(playRound("scissors", "rock"));


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
