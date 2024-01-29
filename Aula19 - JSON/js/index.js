/*
    JSON
    - Significa JavaScript Object Notation.
    - É uma forma de converter um objeto em texto e vice-versa.
    - É usado basicamente para a transmissão de dados entre sistemas.
    - JSON.parse() -> Converte texto no padrão JSON para objetos.
    - JSON.stringify() -> Converte objetos para texto padrão JSON.
*/

// Objeto carro
const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2001
}

// Conversão de objeto para texto JSON
let texto = JSON.stringify(carro);
document.getElementById("area").innerHTML = texto;

// Conversão de texto JSON para objeto
let obj = JSON.parse(texto);
console.log(obj.modelo);