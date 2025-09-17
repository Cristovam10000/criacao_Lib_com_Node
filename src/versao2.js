const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log('qual é o erro: ', erro)
    quebraEmParagrafos(texto);
    

})

console.log(link);

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos
    .filter((paragrafo) => paragrafo)
    .map(paragrafo => {
        return verificarPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem)

}

function LimpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
}

function verificarPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // objeto.propiedade = valor;
    // objeto[propriedade] = valor;

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = LimpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })
    return resultado;

}