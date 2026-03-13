let listaSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Número Secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e '+numeroLimite+'!');
}
mensagemInicial()
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h2', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = 'Você acertou com '+tentativas+' '+palavraTentativa+'!!';
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor.')
    }
        else {
            exibirTextoNaTela('p', 'O número secreto é maior.')
        }
        tentativas++;
        limparCampo();
    }
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
    let elementosLista = listaSorteados.length;

    if (elementosLista == numeroLimite) {
        listaSorteados = []
    }
    if (listaSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaSorteados.push(numeroEscolhido)
        console.log(listaSorteados)
        return numeroEscolhido ;
    }
};
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
    exibirTextoNaTela('h2', '')
}
function mudarNumero() {
    numeroLimite = prompt('Qual será o número máximo?')
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
    exibirTextoNaTela('h2', '')
}