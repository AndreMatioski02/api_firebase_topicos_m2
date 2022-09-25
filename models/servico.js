class Servico {
    constructor(id, nome, descricao, tipo, valor, codigoAnimal){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.tipo = tipo;
        this.valor = valor;
        this.codigoAnimal = codigoAnimal;
    }
}

module.exports = Servico;