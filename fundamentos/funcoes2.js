/**
 * Estudo das funções 
 * Funções com parâmetros
 * @author Isaque Medeiros Pereira
 */

//IMPORTANTE !!! Funções atribuidas obrigatóriamente precisam ser criadas no inicio do código (antes de serem executadas)

// função literal com parâmetros
function somar(num1, num2) {
    return(console.log(num1 + num2))
}

somar (2, 5)

// função atribuida (função anônima) com parâmetros
let somarAtribuida = function (num1, num2) {
    return (console.log(num1 + num2))
}

somarAtribuida(4, 9)

// função atribuida simplificada (arrow function) com parâmetros
let somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarAF(2, 2)

// função atribuida simplificada (arrow function) com parâmetros 1 linha de código (nest caso o return é implícito)

let somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(3, 3)