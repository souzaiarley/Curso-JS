/*
    Classes em JavaScript
    - Usamos a palavra reservada "class".
    - Os atributos são definidos diretamente no método "constructor".
*/

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    buzina() {
        return this.modelo + " buzinou: Biiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);