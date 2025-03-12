// Select DOM elements
const message = document.getElementById('message');
const result = document.getElementById('result');
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const resetButton = document.getElementById('reset');
const choices = document.querySelectorAll('.choice');

let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

// Function to determine winner
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 'draw';
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'player';
  }
  return 'computer';
}

// Function to play the game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  // Update message
  message.textContent = `You chose ${playerChoice.toUpperCase()}, Computer chose ${computerChoice.toUpperCase()}`;

  // Update result
  if (winner === 'player') {
    result.textContent = 'You Win!';
    playerScore++;
  } else if (winner === 'computer') {
    result.textContent = 'Computer Wins!';
    computerScore++;
  } else {
    result.textContent = "It's a Draw!";
  }

  // Update scores
  playerScoreElem.textContent = playerScore;
  computerScoreElem.textContent = computerScore;
}

// Add event listeners to choices
choices.forEach(choice => {
  choice.addEventListener('click', (e) => {
    playGame(e.target.id);
  });
});

// Restart game
resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreElem.textContent = 0;
  computerScoreElem.textContent = 0;
  message.textContent = 'Make your move!';
  result.textContent = '';
});
