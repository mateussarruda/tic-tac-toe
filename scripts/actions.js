import { displayRestart } from './restart.js';
import { Gameboard } from './tictactoe.js';
const table = document.querySelector('.tictactoe');
const resetBtn = document.querySelector('.resetBtn');
Gameboard.createPlayer('mateus');
Gameboard.createPlayer('marcos');

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

resetBtn.addEventListener('click', () => {
    Gameboard.reset();
    const placeBtns = document.querySelectorAll('.place');
    for (let place of placeBtns) {
        place.textContent = '';
    }
});

table.addEventListener('click', () => {
    displayRestart();
    console.log('change');
});