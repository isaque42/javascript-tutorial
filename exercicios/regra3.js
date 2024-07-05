/**
 * Regra de 3
 * @author Isaque Medeiros Pereira
 */

const input = require(`readline-sync`)

console.clear()
console.log("Cálculo do valor da porcentagem:")
console.log("X% de Y = valor")

//variáveis
let x, y, valor

//entrada
x = Number(input.question(`Digite o valor de X:`))
y = Number(input.question(`Digite o valor de y:`))

//proxessamento
valor = (x * y) / 100

//saída
console.log(`${x}% de ${y} = ${valor.toFixed(2)} `)


