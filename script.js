const computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(randomChoice);
}