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
    //Lógica principal de la aplicación
    const appElement = document.getElementById('app');

    //Lógica para implementar el Tablero del Juego
    function createBoard() {
        const boardElement = document.createElement('div');
        boardElement.classList.add('board');

        //Implementación de la lógica para crear las celdas del tablero
        //Utilizar bucles for para generar las filas y columnas

        appElement.appendChild(boardElement);
    }

    createBoard();

    //Implementación de las fichas 
});