class Produto {
    constructor(id, nome, descricao, preco, marca, categoria){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.marca = marca;
        this.categoria = categoria;
    }
}

module.exports = Produto;