
export function contaPalavras(texto) {
    const paragrafos = extrairPalagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificarPalavrasDuplicadas(paragrafo);
    })
    return contagem

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