alert("Bem-vindo ao jogo do número secreto!");
let numeroSecreto = 7;
let numeroDigitado = prompt("Digite um número entre 0 e 10: ");

//se o número digitado for igual o número sorteado
if (numeroSecreto == numeroDigitado) {
    alert("Acertou!! O número secreto é " + numeroSecreto);
} else {
    alert("Errou!! O número secreto é " + numeroSecreto);
}