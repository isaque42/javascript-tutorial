/**
 * Cálculo do volume de um aquário
 * @author Isaque Medeiros Pereira
 */

const input = require ('readline-sync')

//variáveis
let comprimento, largura, litros 

console.clear()
console.log("Cáculo do volume de um aquário")

//entrada
comprimento = Number(input.question("Digite o comprimento em cm do aquário: "))
largura = Number(input.question("Digite o largura em cm do aquário: "))
altura = Number(input.question("Digite o altura em cm do aquário: "))

//processamento

litros = (comprimento * largura * altura) / 1000

// saída
console.log(`No aquário cabem ${litros.toFixed(1)} litros`)