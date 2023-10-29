'use strict';

const randomNumber = Math.floor(Math.random() * 21);
console.log(randomNumber);

const checkButton = document.querySelector('.check');
console.log(checkButton);

const againButton = document.querySelector('.again');
console.log(againButton);

let guessedNumber = document.querySelector('.number').textContent;
console.log(guessedNumber);

let appMessage = document.querySelector('.message').textContent;
console.log(appMessage);

let myNumber = document.querySelector('.guess').value;
console.log(myNumber);

let currentScore = document
  .querySelector('.label-score')
  .querySelector('.score').textContent;
console.log(currentScore);

let highScore = document
  .querySelector('.label-highscore')
  .querySelector('.highscore').textContent;
console.log(highScore);
