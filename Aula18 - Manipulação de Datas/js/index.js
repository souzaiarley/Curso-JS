/*
    Datas
*/

// Comando base para obter a data completa
let data = new Date();

// Para obter o ano atual
let ano = data.getFullYear();

// Para obter o mês atual
// -> Retorna um número de 0 a 11, representando os meses.
let mes = data.getMonth();

// Para obter o dia do mês (1 até 31)
let diaMes = data.getDate();

// Para obter o dia da semana
// -> Retorna um número de 0 a 6, representando os dias da semana.
let diaSemana = data.getDay();

// Para obter a hora (0 até 23)
let hora = data.getHours();

// Para obter o minuto (0 até 59)
let minuto = data.getMinutes();

// Para obter o segundo (0 até 59)
let segundos = data.getSeconds();

// Para obter os milissegundos (0 até 999)
let milissegundos = data.getMilliseconds();

// Para obter a data no formato brasileiro
let dataBr = data.toLocaleString('pt-BR', {dateStyle: 'short'});

// Comparar datas - Maior ou Menor
var hoje = new Date();
var vencimento = new Date(2024, 0, 26);

if (hoje > vencimento) {
    console.log("Boleto vencido!")
}
else {
    console.log("Boleto não vencido!");
}

// Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000));
console.log(diferencaDias);