// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { doesUserWin } from './does-user-win.js';

const playerThrow = document.querySelector('input:checked');
const throwButton = document.getElementById('throwButton');
const displayResults = document.getElementById('results');
const displayWins = document.getElementById('wins');
const displayLosses = document.getElementById('losses');
const displayDraws = document.getElementById('draws');


// initialize state
let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners to update state and DOM

throwButton.addEventListener('click', () => {

    const rock = 1;
    const paper = 2;
    const scissors = 3;

    const computerThrow = getRandomThrow();

    const results = doesUserWin(playerThrow, computerThrow);

    if (results === 'draw') {
        displayResults.textContent = `that's a draw`;
        displayDraws.textContent = draws++;
    }
    else if (results === 'win') {
        displayResults.textContent = `party time, you wild winner!`
        displayWins.textContent = wins++;
    }
    else if (results === 'lose') {
        displayResults.textContent = 'yikes, you lost';
        displayLosses.textContent = losses++;
    }
});