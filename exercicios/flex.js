/**
 * APP Flex
 * @author Isaque Medeiros Pereira
 */

// importação de pacotes
const colors = require('colors')
const input = require('readline-sync')

//variávies
let etanol, gasolina

console.clear()
console.log("Etanol ou Gasolina?")

//entrada
etanol = Number(input.question("Digite o valor do etanol: "))
gasolina = Number(input.question("Digite o valor do gasolina: "))

//processamento/saída
if (etanol < 0.7 * gasolina) {
    console.log("Abastercer com Etanol".green)
    
} else {
    console.log("Abastercer com Gasolina".yellow)
    
}
