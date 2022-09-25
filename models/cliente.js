class Cliente {
    constructor (
        id,
        nome,
        cpf,
        dataNascimento,
        cep,
        telefone,
        categoria
    ) {
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.dataNascimento = dataNascimento
        this.cep = cep
        this.telefone = telefone
        this.categoria = categoria
    }
}

module.exports = Cliente