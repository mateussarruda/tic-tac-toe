import { Gameboard } from "./tictactoe.js";

const player1name = document.querySelector('.player1name');
const player2name = document.querySelector('.player2name');

let playerName = Gameboard.getPlayers();

player1name.textContent = (playerName[0].name);
player2name.textContent = playerName[1].name;
