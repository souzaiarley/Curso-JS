/* EVENTOS
Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado o elemento quando recebe um click.
ondblclick -> Disparado quando o elemento recebe clique duplo.
onmouseover -> Disparado quando o mouse está sobre o elemento.
onmouseout -> Disparado quando o mouse está é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão estiver sendo pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco.
onchange -> Disparado quando existe uma mudança no conteúdo.
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é mantida pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta.
onload -> Disparado quando a página terminou de ser carregada. Usado no Body.
onresize -> Disparado quando há um redimensionamento da janela. 

*/

function eventoClick() {
    alert("Acionou um evento de click");
    document.body.style.backgroundColor = "blue";
}

function eventoDblClick() {
    alert("Evento de clique duplo");
    document.body.style.backgroundColor = "white";
}

function eventoMouseOver() {
    let botao = document.getElementById("mouse");
    botao.style.backgroundColor = "blue";
}

function eventoMouseOut() {
    let botao = document.getElementById("mouse");
    botao.style = "";
    botao.innerHTML ="mouse"
}

function eventoMouseMove() {
    let botao = document.getElementById("mouse");
    botao.innerHTML= "O mouse moveu";
}

function eventoMouseDown() {
    let botao = document.getElementById("mouse");
    botao.style.backgroundColor = "green"
}

function eventoMouseUp() {
    let botao = document.getElementById("mouse");
    botao.style.backgroundColor = "blue";
}

function eventoOnFocus() {
    let elemento = document.getElementById("elemento");
    elemento.style.backgroundColor = "pink";
}

function eventoOnChange() {
    console.log("Mudou.");
}

function eventoOnBlur() {
    let elemento = document.getElementById("elemento");
    elemento.style.backgroundColor = "";
}

function eventoKeyDown() {
    let elemento = document.getElementById("tecla");
    elemento.style.backgroundColor = "blue";
}

function eventoKeyPress() {
    let elemento = document.getElementById("tecla2");
    elemento.style.backgroundColor = "pink";
}

function eventoKeyUp() {
    let elemento = document.getElementById("tecla2");
    elemento.style.backgroundColor = "";
}