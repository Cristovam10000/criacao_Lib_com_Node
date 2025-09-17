const tratarErros = require('./erros/funcoesErros')
const fs = require('fs');
const { text } = require('stream/consumers');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro
        contaPalavras(texto);
    }catch(erro) {
        tratarErros(erro);

    }
})

function contaPalavras(texto) {
    const paragrafos = extrairPalagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificarPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem)

}

function extrairPalagrafos(texto) {
    return texto.toLowerCase().split('\n');
}



function LimpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
}

function verificarPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // objeto.propiedade = valor;

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = LimpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })
    return resultado;

}