/**
 * Conversor de moedas (Real - Dólar)
 * @author Isaque Medeiros Pereira
 */

const input = require(`readline-sync`)

//variávies
let real, dolar, total

console.clear()
console.log("Conversor Real - Dolar")

//entrada
real = Number(input.question("Digite o total em reais a serem convertidos "))
dolar = Number(input.question("Digite a cotacao do valor do dolar: "))

//processamento
total = real / dolar 

//saída
console.log(`R$ ${real.toFixed(2)} equivalem a ${total.toFixed(2)} dolar`)

