/**
 * Cálculo do valor do desconto
 * @author Isaque Medeiros Pereira
 */

const input = require(`readline-sync`)

//variávies
let total, desconto, valor, totalDesconto

console.clear()
console.log("Cálculo do valor do desconto")
//entrada
total = Number(input.question("Digite o valor total:"))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento 1
valor = (desconto * total) / 100

//saída 1
console.log("_________________________________________")
console.log(`Valor total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valor.toFixed(2)}`)

//processamento 2
totalDesconto = total - valor

// saída 2
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
