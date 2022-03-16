let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 2) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  console.log("You Play : ", playerSelection);
  console.log("Computer Play : ", computerSelection);
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Its a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      playerScore++;
      return "You Win! Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "rock") {
      playerScore++;
      return "You Win! Paper beats Rock";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "You Win! Scissors beats Paper";
    }
  } else {
    return "Invalid input";
  }
}

// let playerSelection = prompt("What do you want to play? (rock/paper/scissors)");
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() {
  playerScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What do you want to play? (rock/paper/scissors)");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection, playerScore, computerScore));
  }
  if (playerScore > computerScore) {
    console.log(`You Win! ${playerScore} - ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You Lose! ${playerScore} - ${computerScore}`);
  } else {
    console.log(`Its a tie! ${playerScore} - ${computerScore}`);
  }
}
