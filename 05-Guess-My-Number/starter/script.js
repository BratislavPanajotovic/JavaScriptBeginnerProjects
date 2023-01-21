'use strict';
// document.querySelector('.message').textContent = '🎉Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value;
const secretNumber = Math.round(Math.random() * 20);
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    const message = (document.querySelector('.message').textContent =
      '⛔ No number!');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 You have chosen wisely🦉!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    highscore++;
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '👆 Your guess is higher than my number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😭 You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '👇 Your guess is lower than my number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😭 You lost the game!';
    }
  }
});
