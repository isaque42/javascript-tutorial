/**
 * Sorteio de um numerp de 1 a 16
 * @author Isaque Medeiros Pereira
 */

const input = require('readline-sync')

let sorteio

console.clear()

input.question("Presseiona a tecla [Enter] para sortear um numero")

sorteio = Math.floor(Math.random() * 16 + 1)
console.log(sorteio)