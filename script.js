const computerChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(randomChoice);
}