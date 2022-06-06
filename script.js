// Makes a random choice for the computer player
function computerPlay() {
    const number = Math.floor(Math.random() * 100) + 1;

    if (number < 33) {
        return 'rock';
    } else if (number >= 33 && number <= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Plays a single round of the game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return "You did not enter rock, paper or scissors";
    }

    if (playerSelection === computerSelection) {
        return playerSelection + " ties " + computerSelection;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return playerSelection + " beats " + computerSelection + ", player wins";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return playerSelection + " beats " + computerSelection + ", player wins";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return playerSelection + " beats " + computerSelection + ", player wins";
    } else {
        computerScore += 1;
        return computerSelection + " beats " + playerSelection + ", computer wins";
    }
}

// Finds the winner of the game
function winner(playerScore, computerScore) {
    if (playerScore === computerScore) {
        return "Its a tie";
    } else if (playerScore > computerScore) {
        return "Player wins " + playerScore + " to " + computerScore;
    } else {
        return "Computer wins " + computerScore + " to " + playerScore;
    }
}

// Main game function
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter rock, paper or scissors")
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
    
    console.log(winner(playerScore, computerScore));
}

// Sets scores for player and computer
let playerScore = 0;
let computerScore = 0;

// Starts the game
game();