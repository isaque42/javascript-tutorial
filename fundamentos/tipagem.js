/**
 * Estudos das variávies - tipagem dinâmica
 * @author Isaque Medeiros Pereira
 */

console.clear()
console.log("strings________________")
let nome = "Isaque Medeiros Pereira"
console.log(typeof(nome))
console.log(nome)
//concatenação (unir um texto com o conteúdo de uma variavel)
console.log("professor:" + nome) //evitar!!! concatenar desta forma
console.log(`professor: ${nome}`)
console.log("numeros________________")
let peso = 62
let altura = 1.63
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) //toFixed(2) arredodar 2 casas decimais
// ATENÇÃO !!! 
console.log(10/0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos______________")
let chave = true
console.log(typeof(chave))
let lampada = false
console.log(typeof(lampada))
console.log(`chave: ${chave} Lâmpada: ${lampada}`)