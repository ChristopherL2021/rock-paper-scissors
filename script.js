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
function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return capitalize(playerSelection) + " ties " + capitalize(computerSelection);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return capitalize(playerSelection) + " beats " + capitalize(computerSelection) + ", Player wins";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return capitalize(playerSelection) + " beats " + capitalize(computerSelection) + ", Player wins";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return capitalize(playerSelection) + " beats " + capitalize(computerSelection) + ", Player wins";
    } else {
        computerScore += 1;
        return capitalize(computerSelection) + " beats " + capitalize(playerSelection) + ", Computer wins";
    }
}

// Capitalize first letter of selection
function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
}

const winner = document.querySelector('#winner');
// Finds the winner of the game
function findWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        winner.textContent = `Player beats Computer ${playerScore} to ${computerScore}.`;
    } else {
        winner.textContent = `Computer beats Player ${computerScore} to ${playerScore}.`;
    }
}

// Sets scores for player and computer
let playerScore = 0;
let computerScore = 0;
const results = document.querySelector('#results');
const score = document.querySelector('#score');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (winner) {
            winner.textContent = '';
        }
        
        const round = playRound(button.id);

        results.textContent = round;
        score.textContent = `Computer ${computerScore}, Player ${playerScore}.`;
        
        console.log(round);

        if (playerScore === 5 || computerScore === 5) {
            console.log(findWinner(playerScore, computerScore))
            playerScore = 0;
            computerScore = 0;
        }
    })
});
