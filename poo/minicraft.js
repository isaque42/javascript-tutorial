/**
* POO - Fundamentos da programação orientada a objetos 
* Abstração - Herança - Polimorfismo
* @author Isaque Medeiros Pereira
*/

// Classe modelo (abstração)
class Bloco {
    //atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
    }
   
    //métodos 
    criarBloco() {
        console.log("------------------------------------")
        console.log("┍━┑")
        console.log("┕━┙")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
}

    construir() {
    console.log(`Bloco de ${this.textura} colocado.`) 
}

    minerar() {
    console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}

// Clase modelo com herança (extends)
class Enxada extends Bloco {
    //atributos
    constructor(resitencia, textura, conquista) {
        super(resitencia, textura)
        this.conquista = conquista
    }  
    
    //métodos
    criarEnxada() {
        console.log("------------------------------------")
        console.log("- _")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência ${this.resistencia}`)
    }

    arar() {
        console.log(" ._._._. Terra arada!")
        if (this.conquista === true) {
            console.log("*** Conquista obtida!")
        }
    }

    //polimorfismo (sobrescrita de um método existente)
    minerar() {
        console.log("Xxx Dano atribuído!")
        }
}

// Criação do mundo
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | | ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|")
console.log("")

//criando um objeto (bloco de terra)
const bloco1 = new Bloco(1, "terra")
bloco1.criarBloco()

//criando um bloco de madera
const bloco2 = new Bloco(2, "madeira")
bloco2.criarBloco()
bloco2.construir()

//criando um bloco de pedra
const bloco3 = new Bloco(5, "pedra")
bloco3.criarBloco()
bloco3.minerar()

//criando uma enxada de madeira
const enxada1 = new Enxada(2, "madeira", false)
enxada1.criarEnxada()
enxada1.arar()

//criando uma enxada de ferro
const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarEnxada()
enxada2.arar()

//criando uma enxada de diamante (polimorfismo)
const enxada3 = new Enxada(10, "diamante", false)
enxada3.criarEnxada()
enxada3.minerar()

