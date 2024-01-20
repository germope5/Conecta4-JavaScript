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

    // Lógica para implementar el Tablero del Juego
    function createBoard() {
        const boardElement = document.createElement('div');
        boardElement.classList.add('board');

        // Utilizar bucles for para generar las filas y columnas
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

    // Lógica para implementar las celdas
    function createCell(row, col) {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.dataset.row = row;
        cellElement.dataset.col = col;
        
        //Agregar un evento de clic a cada celda
        cellElement.addEventListener('Click', function() {
            handleCellClick(row, col);
        });

        return cellElement;
    }

    // Llamada a la función para crear el tablero
    createBoard();
});