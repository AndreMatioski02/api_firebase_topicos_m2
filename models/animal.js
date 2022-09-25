class Animal {
    constructor (
        id,
        nome,
        dataNascimento,
        codigoCliente,
        tipoAnimal,
        raca,
        observacao
    ) {
        this.id = id
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.codigoCliente = codigoCliente
        this.tipoAnimal = tipoAnimal
        this.raca = raca
        this.observacao = observacao
    }
}

module.exports = Animal