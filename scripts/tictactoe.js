export const Gameboard = (() => {
    let gameboard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    let plays = [];
    const player = [];
    const createPlayer = (name) => {
        if (player.length < 1) {
            player.push({name: name, mark: 'x'});
        } else if (player.length < 2){
            player.push({name: name, mark: 'o'});
        } else {
            console.log('Número de jogadores máximo atingido')
        }
    }
    const getPosition = (number) => {
        const line = Math.floor((number - 1) / 3);
        const column = (number -1) % 3;
        return {line: line, column: column};
    }
    const getValue = (number) => {
        let position = getPosition(number);
        return gameboard[position.line][position.column];
    }
    const checkGameOver = () => {
        const placesWin = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
        for (let caseWin of placesWin) {
            if (getValue(caseWin[0]) === getValue(caseWin[1]) && getValue(caseWin[0]) === getValue(caseWin[2])) {
                //console.log(getValue(caseWin[0]) === 'o');
                //console.log('caseWin[0]', caseWin[0]);
                if (getValue(caseWin[0]) === 'x') {
                    gameover(player[0]);
                    return true;
                } else if (getValue(caseWin[0]) === 'o') {
                    gameover(player[1]);
                    return true;
                }
            }
        }
        return false;
    }
    const gameover = (player) => {
        console.log(`${player.name} venceu!`);
    }
    let currentPlayer = 1;
    const getCurrentPlayer = () => {
        return currentPlayer;
    }
    const displayController = () => {
        for(let place of gameboard) {
            console.log(place);
        }
    }
    const play = (place) => {
        if (checkGameOver()) {
            console.log('fim de jogo!');
            return false;
        }
        if (player.length < 2) {
            console.log('Crie dois jogadores para poder iniciar a partida.');
            return false;
        }
        for (let play of plays) {
            if (play === place) {
                console.log('Não pode jogar em lugar já utilizado!')
                return false;
            }
        }
        const line = Math.floor((place - 1) / 3);
        const column = (place -1) % 3;
        gameboard[line][column] = (currentPlayer === 1) ? player[0].mark : player[1].mark;
        console.log(`Jogada feita na casa ${place} pelo ${player[currentPlayer - 1].name}`);
        currentPlayer = (currentPlayer === 1) ? 2 : 1;
        plays.push(place);
        if (checkGameOver()) {
            console.log('fim de jogo!');
        }
        return true;
    }
    return {displayController, play, createPlayer, getCurrentPlayer}
})();
/* Gameboard.createPlayer('mateus');
Gameboard.createPlayer('marcos');
Gameboard.createPlayer('lucas');

Gameboard.play(1);
Gameboard.displayController();

Gameboard.play(2);
Gameboard.displayController();

Gameboard.play(3);
Gameboard.displayController();

Gameboard.play(5);
Gameboard.displayController();

Gameboard.play(4);
Gameboard.displayController();

Gameboard.play(8);
Gameboard.displayController(); */
