/**
* Calculadora utilizando função
* @author Daniela Sabino
* @author Isaque Medeiros
*/


const input = require('readline-sync')
console.clear()

let num1, num2, operacao
let somarAFS = (num1, num2) => console.log(`${num1} + ${num2} = ${num1 + num2}`)
let SubtrairAFS = (num1, num2) => console.log(`${num1} - ${num2} = ${num1 - num2}`)
let MultiplicarAFS = (num1, num2) => console.log(`${num1} x ${num2} = ${num1 * num2}`)
let DividirAFS = (num1, num2) => console.log(`${num1} / ${num2} = ${num1 / num2}`)
let PorcentagemAFS = (num1, num2) => console.log(`${num1} % ${num2} = ${(num1 * num2) / 100}`)

num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
console.log("")

console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Porcentagem")
console.log("")
operacao = Number(input.question("Digite a opcao desejada: "))

switch (operacao) {
    case 1:
        somarAFS(num1, num2)
        break
    case 2:
        SubtrairAFS(num1, num2)
        break

    case 3:
        MultiplicarAFS(num1, num2)
        break

    case 4:
        DividirAFS(num1, num2)
        break

    case 5:
        PorcentagemAFS(num1, num2)
        break
}

somarAFS(12, 13)