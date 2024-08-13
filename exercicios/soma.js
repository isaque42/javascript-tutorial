/**
 * Soma dos números dentro de um laço for
 * @author Isaque Medeiros Pereira
 */

const input = require('readline-sync')
let soma = 0

for (let i = 1; i < 101; i++) {
   soma += i
}    
console.log(soma)