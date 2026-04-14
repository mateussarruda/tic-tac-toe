import { Gameboard } from "./tictactoe.js";
const tableBtns = document.querySelector('.tictactoe');
const point1 = document.querySelector('.point1');
const point2 = document.querySelector('.point2');
tableBtns.addEventListener('click', () => {
    const players = Gameboard.getPlayers();
    point1.textContent = players[0].point;
    point2.textContent = players[1].point;
});