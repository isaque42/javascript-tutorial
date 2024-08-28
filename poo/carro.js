/**
* POO - Fundamentos da programação orientada a objetos 
* Abstração - Herança - Polimorfismo
* @author Isaque Medeiros Pereira
*/

// Classe modelo (abstração)

class Carro {
    //atributos
    constructor(nome, ano, cor, carro1) {
        this.nome = nome
        this.cor = cor
        this.ano = ano
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
