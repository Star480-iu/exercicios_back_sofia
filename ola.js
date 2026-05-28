// Importa o módulo nativo do sistema operacional
const os = require('os');

// 1. Mensagem de boas-vindas personalizada
const mensagem = "Olá! Seja bem-vindo ao mundo do Node.js!";
console.log(mensagem);

// 2. Versão do Node.js instalada
console.log(`Versão do Node.js: ${process.version}`);

// 3. Sistema operacional rodando (Nome e Arquitetura)
console.log(`Sistema Operacional: ${os.type()} ${os.arch()}`);

// 4. Caminho da pasta atual
console.log(`Caminho da pasta atual: ${process.cwd()}`);
