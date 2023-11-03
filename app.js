alert("Bem-vindo ao jogo do número secreto!");
let numeroSecreto = Math.round(Math.random() * 30);
console.log(numeroSecreto);
let numeroDigitado;
let tentativas = 0;

console.log(`O número digitado é igual ao número secreto: ${numeroSecreto == numeroDigitado}`);

//enquanto o número secreto não for igual ao número digitado
while (tentativas >= 0) {
    numeroDigitado = prompt("Digite um número entre 0 e 30: ");

    tentativas++;
    //se o número digitado for igual o número secreto
    if (numeroSecreto == numeroDigitado) {
        alert(`Acertou!! Você acertou o número secreto que é ${numeroSecreto}.`);
        break;
    } else {
        if (numeroSecreto > numeroDigitado) {
            alert(`Errou!! O número secreto é maior que ${numeroDigitado}.`);
        } else  {
            alert(`Errou!! O número secreto é menor que ${numeroDigitado}.`);
        }
    }
}

let foramMaisDeUmaTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Você descobriu o número secreto com ${tentativas} ${foramMaisDeUmaTentativa}.`);