import './product-cards.js';
import './comments.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './homework-12.js';

const changeColorCardButton = document.querySelector('#change-Color-all-card');
const greenColorHash = '#d9b713';
const blueColorHash = '#4A90E7';

changeColorCardButton.addEventListener('click', () => {
  document.querySelectorAll('.card').forEach((card) => card.style.backgroundColor = greenColorHash)
})

const firstProductContainers = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-Color-first-card');

changeColorFirstCardButton.addEventListener ('click', () => {
  firstProductContainers.style.backgroundColor = blueColorHash
});

const openGoogleButoon = document.querySelector('#open-google');
const googleURL = 'https://google.com';
openGoogleButoon.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('вы действительно хотите google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

const outputlogButton = document.querySelector('#output-console-log');
  outputlogButton.addEventListener('click', () => outputConsoleLog('дз №6'))

function outputConsoleLog(message) {
   console.log(message);
   alert('buy')
  
}