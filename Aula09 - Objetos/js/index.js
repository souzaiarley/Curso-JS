/* 
    Objetos são semelhantes aos dicionários de python
*/

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2016,
    placa: "ABC-1234",
    buzina: function() {
        alert("BIIIII");
    },
    completo: function() {
        return "A marca é " + this.marca + " e o modelo é " + this.modelo;
    }
};

console.log(carro.completo());
carro.buzina();