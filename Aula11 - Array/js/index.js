/*
    Arrays
    - Podemos declarar arrays por meio de colchetes '[]', separando os itens por vírgula.
    - Para se referir a um único item do array, utilizamos os colchetes e seu índice.
    - Temos alguns métodos como push e pop, length, isArray.
    - Permite diferentes tipos de dados em um mesmo array.
*/

const lista = [1, 2, 3, 4];

lista[0] = "gato";

lista.push(5);
lista.pop();

lista[lista.length] = 6;

alert(lista);
alert(Array.isArray(lista));