import { Gameboard } from "./tictactoe.js";
const tablettt = document.querySelector('.tictactoe');

const winnerEle = document.querySelector('.winner');

tablettt.addEventListener('click', () => {
    if (!Gameboard.checkDraw()) {
        winnerEle.textContent = `${Gameboard.getWinner().name} Win`;
    } else {
        winnerEle.textContent = 'The game was tied';
    }
});