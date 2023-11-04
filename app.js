let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
function verificarChute() {
    let numeroDigitado = Number(document.querySelector("input").value);
    if (numeroDigitado == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!!");
        exibirTextoNaTela("p", "Você descobriu o número secreto!!")
    } else if (numeroDigitado > numeroSecreto) {
        exibirTextoNaTela("p", "Errou!! O número secreto é menor!!")
    } else {
        exibirTextoNaTela("p", "Errou!! O número secreto é maior!!")
    }
}

function exibirTextoNaTela(elemento, texto) {
    let campo = document.querySelector(elemento);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = Math.round(Math.random() * 50);
    return numeroAleatorio;
}

exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 0 e 50:");
gerarNumeroAleatorio();