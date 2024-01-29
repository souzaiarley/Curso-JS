/* Funções
    - Usa a palavra function para criar uma função
*/

function soma(valor1, valor2) {
    return valor1 + valor2;
}

function reaLDolar(real, cotacaoDolar) {
    return real / cotacaoDolar;
}

function helloWorld(){
    alert("Hello World!");
}

var a = 5;
var b = 2;
var sum = soma(a, b);

document.write("A soma entre " + a + " e " + b + " é " + sum);
document.write("<br>A soma entre " + 1 + " e " + 2 + " é " + soma(1, 2));
document.write("<br>R$10 são " + reaLDolar(10, 4.94) + "US$ em 18/01/2024");
