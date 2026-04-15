import { displayRestart } from './restart.js';
import { Gameboard } from './tictactoe.js';
const table = document.querySelector('.tictactoe');
const resetBtn = document.querySelector('.resetBtn');

const urlParams = new URLSearchParams(window.location.search);


Gameboard.createPlayer(urlParams.get('player1'));
Gameboard.createPlayer(urlParams.get('player2'));

table.addEventListener('click', (e) => {
    const target = e.target;
    const place = target.getAttribute('data-place');
    if (Gameboard.play(place)) {
        if (Gameboard.getCurrentPlayer() === 1) {
            target.textContent = 'X';
        } else if (Gameboard.getCurrentPlayer() === 2) {
            target.textContent = 'O'
        }
    }
});



table.addEventListener('click', () => {
    displayRestart();
    console.log('change');
});