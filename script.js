'use strict';

let randomNumber = Math.floor(Math.random() * 21);
let score = 20;
console.log(randomNumber);

const checkNumber = () => {
  let myNumber = document.querySelector('.guess').value;

  let currentScore = document
    .querySelector('.label-score')
    .querySelector('.score').textContent;

  if (myNumber < 0 || myNumber > 20) {
    document.querySelector('.message').textContent = 'Invalid guess!';
  } else {
    if (myNumber < randomNumber) {
      document.querySelector('.message').textContent = 'Too low...';
      currentScore = currentScore - 1;
      document
        .querySelector('.label-score')
        .querySelector('.score').textContent = currentScore;
    }

    if (myNumber > randomNumber) {
      document.querySelector('.message').textContent = 'Too high...';
      currentScore = currentScore - 1;
      document
        .querySelector('.label-score')
        .querySelector('.score').textContent = currentScore;
    }

    if (myNumber == randomNumber) {
      document.querySelector('.message').textContent = 'Correct number!';
      document
        .querySelector('.label-score')
        .querySelector('.score').textContent = currentScore;
      document.querySelector('.number').textContent = randomNumber;
      document
        .querySelector('.label-highscore')
        .querySelector('.highscore').textContent = currentScore;
      document.querySelector('.check').style.display = 'none';
      document.body.style.backgroundColor = 'green';
    }
  }
};

const playAgain = () => {
  randomNumber = Math.floor(Math.random() * 21);
  console.log(randomNumber);
  document.body.style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.label-score').querySelector('.score').textContent =
    score;
  document.querySelector('.guess').value = '';
};
