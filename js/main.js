// let rock = 1;
// let paper = 2;
// let scissors = 3;


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
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a Tie";
    } else {
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`;
    }
}


// play game function
function game() {
    // Scores set at 0
    let playerScore = 0;
    let computerScore = 0;

    // Loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choose: rock, paper or scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        // Score increment on win
        if (result.startsWith("You Win!")) {
            playerScore++;
        } else if (result.startsWith("You Lose!")) {
            computerScore++;
        }

    }

    // Returning the score
    console.log(`Game over\n Your score was : ${playerScore}\n The computers score was: ${computerScore}\n`);

    if (playerScore > computerScore) {
        console.log("Congratulations you win!");
    } else if (computerScore > playerScore) {
        console.log("Bad luck, the computer wins, better luck next time");
    } else {
        console.log("Oh, it's a tie");
    }

    // Ask if the user wants to play again
    const playAgain = confirm("Would you like to play again?")

    if (playAgain === true) {
        game(); // Restarts game
    } else {
        console.log("Thanks very much for playing");
    }
}

// Calls the beginning of the game
game();