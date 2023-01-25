'use strict';
// document.querySelector('.message').textContent = '🎉Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value;
var secretNumber = Math.round(Math.random() * 20);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    const message = displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 You have chosen wisely🦉!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '👆 Your guess is higher than my number!'
          : '👇 Your guess is lower than my number!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('😭 You lost the game!');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highscore = 0;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
