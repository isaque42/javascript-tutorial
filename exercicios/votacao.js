/**
 * Exemplo de uso da estrutura else if
 * @author Isaque Medeiros Pereira
 */

const input = require('readline-sync') 

//variáveis
let idade

console.clear()
//entrada
idade = Number(input.question("Digite a sua idade:"))
if(idade < 16) {
    console.log("Proibido votar")
    } else if(idade === 16 || idade === 17 || idade > 70) {
        console.log("Voto facultativo")
    } else {
        console.log("Voto obrigatório")
        }