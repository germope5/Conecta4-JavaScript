/*
PROYECTOS DE PROGRAMACIÓN - MoureDev
#1 Aplicación de: CONECTA 4
Instrucciones:
* - Tablero de 7x6 (7 en el eje "x" y 6 en el "y").
 * - Fichas Rojas y Amarillas. La primera partida la comienza siempre la Roja
 *   (la segunda la Amarilla, la tercera la Roja...).
 * - No hay que implementar una funcionalidad que te permita jugar contra la App.
 *   Se asume que jugarán dos personas reales alternándose.
 * - Al seleccionar la columna se coloca la ficha en la parte inferior.
 * - Guardar el número partidas ganadas de cada equipo mientras la App no se finaliza.
 * - Dos botones para reiniciar la partida en marcha y para resetear el
 *   contador de victorias y derrotas.
 * - Puedes añadirle todas las funcionalidades extra que consideres.

*/

document.addEventListener('DOMContentLoaded', function() {
    const appElement = document.getElementById('app');
    let currentPlayer = 'red';
    let redScore = 0;
    let yellowScore = 0;

    function createBoard() {
        const boardElement = document.createElement('div');
        boardElement.classList.add('board');

        for (let row = 0; row < 7; row++) {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');

            for (let col = 0; col < 6; col++) {
                const cellElement = createCell(row, col);
                rowElement.appendChild(cellElement);
            }

            boardElement.appendChild(rowElement);
        }

        appElement.appendChild(boardElement);
    }

    function createCell(row, col) {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.dataset.row = row;
        cellElement.dataset.col = col;

        cellElement.addEventListener('click', function() {
            handleCellClick(row, col);
        });

        return cellElement;
    }

    function handleCellClick(row, col) {
        const cellElement = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (!cellElement.classList.contains('occupied')) {
            const playerColor = (currentPlayer === 'red') ? 'red' : 'yellow';

            cellElement.classList.add(playerColor, 'occupied');

            if (checkForWin(row, col)) {
                // Si hay 4 fichas consecutivas, incrementa el contador de puntos
                if (currentPlayer === 'red') {
                    redScore++;
                    console.log('Puntos del jugador rojo:', redScore);
                } else {
                    yellowScore++;
                    console.log('Puntos del jugador amarillo:', yellowScore);
                }
                resetBoard();
            } else {
                switchPlayer();
            }
        }
    }

    function checkForWin(row, col) {
        // Implementa la lógica para verificar si hay 4 fichas consecutivas
        // en cualquier dirección (horizontal, vertical, diagonal).
        // Puedes utilizar funciones auxiliares para hacerlo más manejable.
        return checkHorizontal(row, col) || checkVertical(row, col) || checkDiagonal(row, col);
    }

    function checkHorizontal(row, col) {
        // Implementa la lógica de verificación horizontal aquí
    }

    function checkVertical(row, col) {
        // Implementa la lógica de verificación vertical aquí
    }

    function checkDiagonal(row, col) {
        // Implementa la lógica de verificación diagonal aquí
    }

    function switchPlayer() {
        currentPlayer = (currentPlayer === 'red') ? 'yellow' : 'red';
    }

    function resetBoard() {
        // Implementa la lógica para reiniciar el tablero, si es necesario.
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.classList.remove('red', 'yellow', 'occupied');
        });

        //Reiniciar el jugador actual a 'red'
        currentPlayer = 'red';
    }

    createBoard();
});