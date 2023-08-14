const myArray = ["rock", "paper", "scissor"];

function getComputerChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie";
  } else if (result == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const myArray = prompt("Rock Paper Scissor");
    if (myArray == null) {
      continue;
    }
    const choiceInLowerCase = myArray.toLowerCase();
    if (myArray.includes(choiceInLowerCase)) {
      validatedInput = true;
      return choiceInLowerCase;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection)) {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player was the winner!");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer was the winner!");
  } else {
    console.log("We have a tie!");
  }
}

game();
