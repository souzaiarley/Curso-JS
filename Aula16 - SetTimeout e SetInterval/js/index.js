/*
    Eventos de Tempo do Javascript.


    Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

    Os dois métodos-chave para usar com JavaScript são:

    setTimeout(função, tempo em milissegundos);
    -> Executa uma função depois de esperar um número específico de milissegundos.

    setInterval(função, tempo em milissegundos);
    -> É o mesmo que setTimeout(), mas repete a execução da função continuadamente.
*/

function ativarContagem() {
    //document.getElementById("tempo").innerHTML = "Começou a contar!";
    //tempo = setTimeout(function(){ document.getElementById("tempo").innerHTML = "Executou o setTimeout"; }, 5000);

    tempo = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma;
    }, 1000);

}

function pararContagem() {
    //clearTimeout(tempo);
    //document.getElementById("tempo").innerHTML = "Parou a contagem"
    clearInterval(tempo);
}