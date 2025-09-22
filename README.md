# Analisador de Palavras Duplicadas

Este projeto é uma biblioteca/CLI escrita em Node.js para analisar arquivos de texto e identificar palavras repetidas em cada parágrafo. A ferramenta lê um arquivo de entrada, contabiliza quantas vezes cada palavra aparece e gera um relatório apenas com as palavras que ocorreram mais de uma vez.

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/) 20+
- [Commander](https://github.com/tj/commander.js) para construção da interface de linha de comando
- [Chalk](https://github.com/chalk/chalk) para mensagens coloridas no terminal
- Módulos nativos do Node (`fs` e `path`) para leitura/escrita de arquivos e resolução de caminhos

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js 20 ou superior
- npm (instalado junto com o Node.js)

## Instalação

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

A CLI expõe o comando `node src/cli.js` com duas opções obrigatórias:

- `-t, --texto`: caminho do arquivo de texto a ser analisado.
- `-d, --destino`: diretório onde o resultado será salvo (o arquivo `resultado.txt` é gerado nesse local).

Exemplo:

```bash
node src/cli.js --texto ./arquivos/texto-web.txt --destino ./src/resultados
```

Ao final, uma mensagem verde indicará o sucesso da operação e o arquivo `resultado.txt` conterá as palavras duplicadas de cada parágrafo.

## Estrutura do projeto

```
criacao_Lib_com_Node/
├── arquivos/           # Textos de exemplo para testes
├── src/
│   ├── cli.js          # Interface de linha de comando
│   ├── index.js        # Funções principais de contagem
│   ├── helpers.js      # Funções auxiliares para montar a saída
│   └── erros/          # Tratamento de erros
├── package.json
└── README.md
```

## Desenvolvimento

- `src/index.js`: expõe a função `contaPalavras`, responsável por normalizar o texto, separar parágrafos e contabilizar as ocorrências.
- `src/helpers.js`: monta o relatório textual destacando as palavras com duas ou mais repetições.
- `src/cli.js`: executa a leitura do arquivo, aplica a contagem e salva o resultado usando as opções passadas na linha de comando.

## Próximos passos sugeridos

- Adicionar testes automatizados para cobrir os principais fluxos.
- Permitir que o usuário configure um número mínimo de ocorrências antes de registrar a palavra no relatório.
- Internacionalizar as mensagens exibidas no terminal.

## Licença

Projeto distribuído sob a licença ISC, conforme declarado em `package.json`.
