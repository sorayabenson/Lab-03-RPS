// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { doesUserWin } from './does-user-win.js';

const throwButton = document.getElementById('throwButton');
const displayResults = document.getElementById('results');
const displayWins = document.getElementById('wins');
const displayLosses = document.getElementById('losses');
const displayDraws = document.getElementById('draws');

// initialize state
let wins = 1;
let losses = 1;
let draws = 1;

// set event listeners to update state and DOM
throwButton.addEventListener('click', () => {

    const selectedThrow = document.querySelector('input:checked');
    const playerThrow = selectedThrow.value;
    const computerThrow = getRandomThrow();
    const results = doesUserWin(playerThrow, computerThrow);

    if (results === 'draw') {
        displayResults.textContent = `that's a draw`;
        displayDraws.textContent = draws++;
    }
    if (results === 'win') {
        displayResults.textContent = `party time, you wild winner!`
        displayWins.textContent = wins++;
    }
    if (results === 'lose') {
        displayResults.textContent = 'yikes, you lost';
        displayLosses.textContent = losses++;
    }

});