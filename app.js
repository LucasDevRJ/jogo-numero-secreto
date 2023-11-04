function verificarChute() {
    console.log("O botão foi clicado!");
}

function exibirTextoNaTela(elemento, texto) {
    let campo = document.querySelector(elemento);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    let numero = Math.round(Math.random() * 30);
    alert(numero);
}

exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10:");
gerarNumeroAleatorio();