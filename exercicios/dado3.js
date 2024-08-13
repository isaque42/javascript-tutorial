/**
 * Jogo do dado - Exemplo de uso de uma função simples
 * @author Isaque Medeiros Pereira
 */

const input = require('readline-sync')
let face
let confirma = "n"

function jogarDado() {
    console.clear()
    console.log("Jogo do dado")
    input.question("Pressiona a tecla [Enter] para jogar o dado:")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)
}

jogarDado()

confirma - input.question("Deseja jogar novamente(s/n): ")

if (confirma === "s") {
    jogarDado()
}
