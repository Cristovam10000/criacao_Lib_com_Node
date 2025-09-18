import fs from 'fs';
import tratarErros from './erros/funcoesErros.js';
import { contaPalavras } from './index.js';
import { json } from 'stream/consumers';
import { montaSaidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro
        const resultado = contaPalavras(texto);
        criaESalvarArquivos(resultado, endereco)
    } catch (erro) {
        tratarErros(erro);
    }
})

  async function criaESalvarArquivos(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras =   montaSaidaArquivo(listaPalavras)


    try {
      await fs.promises.writeFile(arquivoNovo, textoPalavras);
      console.log('arquivo crido');
    }catch (erro) {

    }
}


// function criaESalvarArquivos(ListarPalavras, endereco) {

//     const arquivoNovo = `${endereco}/resultado.txt`
//     const textoPalavras  = JSON.stringify(ListarPalavras)

//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//     .then(() => {
//         console.log('arquivo criado');
//     })
//     .catch((erro) => {
//         throw erro
//     })
//     .finally(() => {
//         console.log('operação finalizada')
//     })
// }