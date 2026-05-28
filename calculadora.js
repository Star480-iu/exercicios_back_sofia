// Captura os argumentos da linha de comando, ignorando os dois primeiros
const args = process.argv.slice(2);

if (args.length < 3) {
    console.log("Erro: Por favor, forneça 3 argumentos.");
    console.log("Exemplo de uso: node calculadora.js 10 + 5");
    process.exit(1);
}

// Converte os argumentos para Number e pega o operador
const num1 = parseFloat(args[0]);
const operador = args[1];
const num2 = parseFloat(args[2]);

let resultado;

// Executa a operação dependendo do operador
switch (operador) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
            process.exit(1);
        }
        resultado = num1 / num2;
        break;
    default:
        console.log(`Erro: Operador '${operador}' inválido. Use +, -, *, ou /`);
        process.exit(1);
}

console.log(`Resultado: ${num1} ${operador} ${num2} = ${resultado}`);
