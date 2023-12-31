let possibilities = ["wizard", "fairy", "assassin"];
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

let wizard = document.getElementById("wizard");
wizard.addEventListener("click", function () {
  playRound("wizard", computerSelection);
  let audio = new Audio("assets/wizard.mp3");
  audio.play();
});
let fairy = document.getElementById("fairy");
fairy.addEventListener("click", function () {
  playRound("fairy", computerSelection);
  let audio = new Audio("assets/fairy.mp3");
  audio.play();
});
let assassin = document.getElementById("assassin");
assassin.addEventListener("click", function () {
  playRound("assassin", computerSelection);
  let audio = new Audio("assets/assassin.mp3");
  audio.play();
});

let comment = document.getElementById("comment");

let helpBtn = document
  .getElementById("help")
  .addEventListener("click", helpInstruction);
let closePopup = document
  .getElementById("closePopup")
  .addEventListener("click", closePopupWindow);
let popupWindow = document.getElementById("popup");

let playerScoreText = document.getElementById("player-score");
let computerScoreText = document.getElementById("computer-score");

let starsAnimation = document.getElementsByClassName("stars");

function getComputerChoice() {
  return possibilities[Math.floor(possibilities.length * Math.random())];
}
// a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  cleaningCommentStyles();
  cleaningComment();
  roundCounter++;
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    comment.innerText = `No one won, ${playerSelection} and ${computerSelection}! 🫥`;
    playerScore++;
    computerScore++;
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
  } else if (
    (playerSelection === "wizard" && computerSelection === "assassin") ||
    (playerSelection === "fairy" && computerSelection === "wizard") ||
    (playerSelection === "assassin" && computerSelection === "fairy")
  ) {
    comment.innerText = `You won, ${playerSelection} beats ${computerSelection}! 😃`;
    playerScore++;
    playerScoreText.innerText = playerScore;
  } else {
    comment.innerText = `You lose, ${computerSelection} beats ${playerSelection} 😣`;
    computerScore++;
    computerScoreText.innerText = computerScore;
  }

  if (playerScore === 5 || computerScore === 5) {
    endGame();
    comment.style.color = "red";
    comment.style.borderBottom = "2px solid red";
  }
}

function endGame() {
  if (playerScore > computerScore) {
    comment.innerText = "You won!";
    let audio = new Audio("assets/bravo.mp3");
    audio.play();
  } else if (computerScore > playerScore) {
    comment.innerText = "You lose";
    let audio = new Audio("assets/crying.mp3");
    audio.play();
  } else {
    comment.innerText = "No one won";
  }
  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
  playerScoreText.innerText = 0;
  computerScoreText.innerText = 0;
}
function cleaningComment() {
  comment.innerText = "";
}
function cleaningCommentStyles() {
  comment.style.color = "#010b3d";
  comment.style.borderBottom = "none";
}
function helpInstruction() {
  popupWindow.style.visibility = "visible";
}
function closePopupWindow() {
  popupWindow.style.visibility = "hidden";
}
