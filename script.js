"use strict";

function playGame() {
  const computerChoices = ["rock", "paper", "scissors"];
  let playerSelection;
  let computerSelection;

  function getComputerChoice() {
    let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomChoice;
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    }

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
      return `${playerSelection} beats ${computerSelection}, Player wins!`
    } else {
      return `${computerSelection} beats ${playerSelection}, Computer wins!`
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
}