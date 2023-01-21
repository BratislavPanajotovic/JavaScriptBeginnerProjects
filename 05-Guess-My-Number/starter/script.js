'use strict';
// document.querySelector('.message').textContent = '🎉Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value;
const secretNumber = Math.round(Math.random() * 20);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    const message = (document.querySelector('.message').textContent =
      '⛔ No number!');
    console.log(message);
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 You have chosen wisely🦉!';
  }
});
