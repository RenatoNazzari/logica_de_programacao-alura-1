alert('Bem vindo ao jogo do número secreto');

let minValue = parseInt(prompt('Determine o valor mínimo para o número'));
let maxValue = parseInt(prompt('Determine o valor máximo para o número'));
let numeroSecreto = geraNumeroAleatorio(minValue, maxValue + 1);
let chute;
let numeroTentativas = 1;

function geraNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

console.log(numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre ${minValue} e ${maxValue}`);
    if (chute == numeroSecreto) {
        break;
    } else
        if (chute > numeroSecreto) {
            alert('Número incorreto! Tente novamente.');
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert('Número incorreto! Tente novamente.');
            alert(`O número secreto é maior que ${chute}`);
        }
    numeroTentativas++;
}

let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${numeroTentativas} ${palavraTentativa}.`);


