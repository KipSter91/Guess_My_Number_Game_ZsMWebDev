'use strict';

let randomNumber = Math.floor(Math.random() * 21);
let score = 20;
console.log(randomNumber);

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const checkNumber = () => {
  let myNumber = document.querySelector('.guess').value;

  let currentScore = document.querySelector('.score').textContent;

  if (myNumber < 0 || myNumber > 20) {
    document.querySelector('.message').textContent = 'Invalid guess!';
  }

  if (myNumber == randomNumber) {
    displayMessage('Correct number!');
    document.querySelector('.score').textContent = currentScore;
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.highscore').textContent = currentScore;
    document.querySelector('.check').style.display = 'none';
    document.body.style.backgroundColor = 'green';
  } else if (myNumber !== randomNumber) {
    if (currentScore > 1) {
      displayMessage(myNumber > randomNumber ? 'Too high' : 'Too low');
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

const playAgain = () => {
  randomNumber = Math.floor(Math.random() * 21);
  console.log(randomNumber);
  document.body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};
