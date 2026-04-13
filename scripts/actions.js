import { Gameboard } from './tictactoe.js';
const table = document.querySelector('.tictactoe');

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