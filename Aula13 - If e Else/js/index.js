 /*
    If e Else
    - Mesma sintaxe do C/C++.
 */

function verificar() {
    let nome = document.getElementById('nome').value;

    if (nome=="" || nome== null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    }
    else {
        let p = document.getElementById("teste");
        p.innerHTML = "Prazer te conhecer, " + nome;
        p.style.color = "green";
    }
}