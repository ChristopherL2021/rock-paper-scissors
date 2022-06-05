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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return "You did not enter rock, paper or scissors";
    }

    if (playerSelection === computerSelection) {
        return playerSelection + " ties " + computerSelection;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerSelection + " beats " + computerSelection + ", player wins";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerSelection + " beats " + computerSelection + ", player wins";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerSelection + " beats " + computerSelection + ", player wins";
    } else {
        return computerSelection + " beats " + playerSelection + ", computer wins";
    }
}