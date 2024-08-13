/**
 * Indicar quantidade de números pares dentro de um laço for
 * @author Isaque Medeiros Pereira
 */

let pares = 0

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        pares++
    }
}

console.log(pares)

