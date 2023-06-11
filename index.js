let possibilities = ["rock", "paper", "scissors"];
let choice = prompt("What's your choice?");

function getComputerChoice() {
  return (randomValue =
    possibilities[Math.floor(possibilities.length * Math.random())]);
}

// a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "paper"
  ) {
    alert("No one won, paper and paper! 🫥");
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors"
  ) {
    alert("You lose, scissors beat paper 😣");
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    alert("You won, paper beats rock! 😃");
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    alert("You lose, paper beats rock 😣");
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "rock"
  ) {
    alert("No one won, rock and rock! 🫥");
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    alert("You won, rock beats paper! 😃");
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  ) {
    alert("You won, scissors beat paper! 😃");
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock"
  ) {
    alert("You lose, rock beats scissors 😣");
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "scissors"
  ) {
    alert("No one won, scissors and scissors! 🫥");
  } else {
    alert("I don't what you're doing but this game doesn't work like that! 💩");
  }
}

computerSelection = getComputerChoice();
alert("Computer chose " + computerSelection);
console.log(playRound(choice, computerSelection));
