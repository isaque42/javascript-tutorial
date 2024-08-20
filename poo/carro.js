/**
* POO - Fundamentos da programação orientada a objetos 
* Abstração - Herança - Polimorfismo
* @author Isaque Medeiros Pereira
*/

// Classe modelo (abstração)

class Carro {
    //atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
    }

    criarCarro() {
        console.log("------------------------------------")
        console.log("_0┍━┑0_")
        console.log("_0┕━┙0_")
        console.log(`Carro de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
}

construir() {
    console.log(`Carro de ${this.textura} ligando.`) 
}

    minerar() {
    console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}
