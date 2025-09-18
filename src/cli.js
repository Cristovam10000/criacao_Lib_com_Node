import fs from 'fs';
import tratarErros from './erros/funcoesErros.js';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro
        contaPalavras(texto);
    } catch (erro) {
        tratarErros(erro);
    }
})

function criarESalvarArquivos(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras =   JSON.stringify(listaPalavras);
    try {
      
    }catch (erro) {

    }
}

