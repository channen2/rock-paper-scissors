// Computer picks random action
function computerPlay(){
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Check if option is valid
function checkValidOption(string){
  s = string.toLowerCase(); 
  return (s==="rock")||(s==="scissors")||(s==="paper")
}

// Play a round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection){
  
  // Function that capitalizes the first letter of a string
  let capitalize = (string) => string[0].toUpperCase() + string.slice(1);

  // Case insensitive
  p = playerSelection.toLowerCase();
  c = computerSelection.toLowerCase();

  // Check for winner
  playerWins = (p==="rock"&&c=="scissors")||(p==="scissors"&&c==="paper")||(p==="paper"&&c==="rock")
  tie = p===c

  if (tie){
    return `Tie! You both picked ${ capitalize(p) }!`;
  }
  else if (playerWins){
    return `You win! ${ capitalize(p) } beats ${ capitalize(c) }!`;
  }
  else{
    return `You Lose! ${ capitalize(c) } beats ${ capitalize(p) }!`;
  }
  
}

// Play a 5 round game of Rock, Paper, Scissors
function game(){

  let playerSelection, computerSelection, validSelection;

  for (i = 0; i < 5; i++) {
    // Player enters their choice
    validSelection = false

    while (!validSelection){
      playerSelection = prompt("Type 'Rock', 'Paper', or 'Scissors'")
      validSelection = checkValidOption(playerSelection)
    }
  
    // Result of the round
    roundResult = playRound(playerSelection, computerPlay());
    console.log(roundResult)
  }
}