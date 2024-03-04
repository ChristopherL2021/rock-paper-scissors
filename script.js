"use strict";

function playGame() {
  const computerChoices = ["rock", "paper", "scissors"];
  let playerSelection;
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomChoice;
  }

  function isPlayerWinner(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
          return true;
        } else {
          return false;
    }   
  }

  function playerWins(playerSelection, computerSelection) {
    return `${playerSelection} beats ${computerSelection}, Player wins!`;
  }

  function computerWins(playerSelection, computerSelection) {
    return `${computerSelection} beats ${playerSelection}, Computer wins!`;
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    }

    if (isPlayerWinner(playerSelection, computerSelection)) {
      playerScore += 1;
      return playerWins(playerSelection, computerSelection);
    } else {
      computerScore += 1;
      return computerWins(playerSelection, computerSelection);
    }
  }

  playerSelection = prompt("Pick Rock, Paper, or Scissors.", "Rock");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Pick Rock, Paper, or Scissors.", "Rock");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Pick Rock, Paper, or Scissors.", "Rock");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Pick Rock, Paper, or Scissors.", "Rock");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Pick Rock, Paper, or Scissors.", "Rock");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  console.log(computerScore, playerScore);
}