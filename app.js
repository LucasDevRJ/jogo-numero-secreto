alert("Bem-vindo ao jogo do número secreto!");
let numeroSecreto = 7;
let numeroDigitado = prompt("Digite um número entre 0 e 10: ");

console.log(numeroSecreto);
console.log(`O número digitado é igual ao número secreto: ${numeroSecreto == numeroDigitado}`);

//se o número digitado for igual o número secreto
if (numeroSecreto == numeroDigitado) {
    alert(`Acertou!! O número secreto é ${numeroSecreto}`);
} else {
    if (numeroSecreto > numeroDigitado) {
        alert(`O número secreto é maior que ${numeroDigitado}`);
    } else  {
        alert(`O número secreto é menor que ${numeroDigitado}`);
    }
}