'use strict';

// const again = document.querySelector('.again');
let number = document.querySelector('.number');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
let message = document.querySelector('.message');
let scoreDisplay = document.querySelector('.score');

// condition
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// initial game
const init = function () {
  message.textContent = 'Start guessing...';
  number.style.width = '15rem';
  number.textContent = '?';
  score = 20;
  scoreDisplay.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
};

init();
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'No number';
  } else if (guess === secretNumber && score > 1) {
    // Win the game
    message.textContent = 'You win!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.textContent = secretNumber;
    number.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    message.textContent = 'Too high';
    score--;
    scoreDisplay.textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = 'Too low';
    score--;
    scoreDisplay.textContent = score;
  } else if (score < 1) {
    message.textContent = 'You lose';
  }
});

again.addEventListener('click', function () {
  init();
});
