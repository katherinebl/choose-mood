'use strict';

//Declare constants
const moodChoose = document.querySelector('.mood__control--choose');
const moodUpdate = document.querySelector('.mood__control--update');
const moodFace = document.querySelector('.mood__face');
const body = document.querySelector('.body');

//Function to generate random numbers
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Function for even numbers
function isEven(n) {
// return true if number is even
// else return false
  return n%2 === 0;
}

//Function to update mood face
function updateMoodFace() {
//Passing select value to h1
  moodFace.innerHTML = moodChoose.value;
}

//Function to update color theme
function updateColorTheme() {
//Generate a randomNumber (max 100)
  const myRandomNumber = getRandomNumber(100);
  console.log(myRandomNumber);

  // if random number is even add yellow color, else add green
  if(isEven(myRandomNumber)) {
    body.classList.remove('theme-green');
    body.classList.add('theme-yellow');
  } else {
    body.classList.add('theme-green');
    body.classList.remove('theme-yellow');
  }
}

function handleUpdateClick(event) {
//Prevent default behaviour of submit inside form
  event.preventDefault();

  // Update face
  updateMoodFace();
  // Update app theme
  updateColorTheme();
}

moodUpdate.addEventListener('click', handleUpdateClick);
