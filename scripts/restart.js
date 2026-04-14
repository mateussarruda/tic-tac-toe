import { Gameboard } from './tictactoe.js';
const overlay = document.querySelector('.overlay');
const restartBtn = document.querySelector('.resetBtn');
export function displayRestart() {

    if (Gameboard.checkGameOver() || Gameboard.checkDraw()) {
        overlay.style.display = 'block';
        console.log('gameover');
    } else {
        overlay.style.display = 'none';
    }
}

restartBtn.addEventListener('click', () => {
    Gameboard.reset();
    const placeBtns = document.querySelectorAll('.place');
    for (let place of placeBtns) {
        place.textContent = '';
    }
    overlay.style.display = 'none';
});