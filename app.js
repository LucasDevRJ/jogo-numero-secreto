let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function verificarChute() {
    let numeroDigitado = Number(document.querySelector("input").value);
    if (numeroDigitado == numeroSecreto) {
        let foramMaisDeUmaTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${foramMaisDeUmaTentativa}!!`;
        exibirTextoNaTela("h1", "Acertou!!");
        exibirTextoNaTela("p", mensagem);
        habilitaEDesabilitaBotoes(true);
    } else if (numeroDigitado > numeroSecreto) {
        exibirTextoNaTela("p", "Errou!! O número secreto é menor!!");
    } else {
        exibirTextoNaTela("p", "Errou!! O número secreto é maior!!");
    }
    tentativas++;
    limparCampo();
}

function exibirTextoNaTela(elemento, texto) {
    let campo = document.querySelector(elemento);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = Math.round(Math.random() * 50);
    if (listaDeNumerosSorteados.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroAleatorio);
        console.log(listaDeNumerosSorteados);
        return numeroAleatorio;
    }
}

function limparCampo() {
    campo = document.querySelector("input");
    campo.value = "";
}

function reiniciarJogo() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    habilitaEDesabilitaBotoes();
    exibeMensagemInicial();
    console.log(numeroSecreto);
}

function habilitaEDesabilitaBotoes(novoJogo) {
    if (novoJogo) {
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chutar").setAttribute("disabled", true);
    } else {
        document.getElementById("reiniciar").setAttribute("disabled", false);
        document.getElementById("chutar").removeAttribute("disabled");
    }
}

function exibeMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 0 e 50:");
}

gerarNumeroAleatorio();
exibeMensagemInicial();