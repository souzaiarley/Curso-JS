/*
    Sintaxe do switch:

    switch (expressão) {
        case a:
            // código
            break;
        case b:
            // código
            break;
        case c:
            // código
            break;
        default:
            // código
            break;
    }
*/

// Exemplo do switch:

function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        default:
            document.getElementById("texto").innerHTML = "Não há fundo disponível para essa cor."
    }
}