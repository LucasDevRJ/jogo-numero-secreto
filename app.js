alert("Bem-vindo ao jogo do número secreto!");
let numeroSecreto = 7;
let numeroDigitado = prompt("Digite um número entre 0 e 10: ");

if (numeroSecreto == numeroDigitado) {
    console.log("Acertou!! Você acertou o número secreto que é " + numeroSecreto);
}