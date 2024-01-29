/* Laço For */

// Exemplos do uso do for:

var ano = new Date().getFullYear();

for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"<option>";
}



const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"];
var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}