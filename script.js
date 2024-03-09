'use strict';

// To get a random number
let number = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.number').textContent = messsage;
};

// console.log((document.querySelector('.number').textContent = number));

// score variable to decrease on wrong guess
let score = 20;
let highscore = -1;

// On clicking the check Button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If number not entered

  if (!guess) {
    document.querySelector('body').style.backgroundColor = 'Grey';
    document.querySelector('.message').style.color = 'black';
    // document.querySelector('.message').textContent = 'Enter the Number';
    displayMessage('Enter the number');
  }

  // If correct guess
  else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'To high' : 'To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent = 'Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
