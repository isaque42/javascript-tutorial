/**
 * Estudo das funções em JS
 * Funções simples
 * @author Isaque Medeiros Pereira
 */

// função simples (literais)
function hello() {
    console.log("Hello function")
} 

// para executar uma função basta escrever o nome dela seguindo de parênteses
hello()
//console.log(typeof(hello))

// função atribuida (função anônima)
const hello2 = function() {
    console.log("Hello function atribuida")
}

//console.log(typeof(hello2))
hello2()

// função atribuida simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow funtion")    
}

hello3()

// função atribuida simplificada (arrow function) 1 linha de código
const helllo4 = _ => console.log("Hello arrow function on line")

helllo4()