/**
 * Cálculo da quantidade de tijolos baiano 8 furos por metro quadrado, sabendo que 1m² = 28 tijolos
 * @author Isaque Medeiros Pereira
 */

const input = require('readline-sync')

//variáveis
let m2, tijolos

console.clear()
console.log("Cáculo da quantidade de tijolos por metro quadrado (tijolo baiano 8 furos")

//entrada
m2 = Number(input.question("Quantos metros quadrados voce precisa?"))

//processamento
tijolos = m2 * 28

//saída
console.log(`Você precisará de ${tijolos} tijolos`)