'use strict'

require('../models/produto');
const repository = require('../repositories/produtoRepository');

function produtoController() {}

produtoController.prototype.post = async (req, res) => {
  await new repository().create(req.body);
  res.status(201).send("Produto cadastrado com sucesso!");
}

produtoController.prototype.put = async (req, res) => {
  await new repository().update(req.params.id, req.body);
  res.status(202).send("Produto atualizado com sucesso!");
}

produtoController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll();
  lista 
    ? res.status(200).send(lista)
    : res.status(404).send("Nenhum produto cadastrado!");
}

produtoController.prototype.getById = async (req, res) => {
  let produto = await new repository().getById(req.params.id);
  produto 
    ? res.status(200).send(produto)
    : res.status(400).send("Nenhum produto cadastrado com o ID informado!");
}

produtoController.prototype.delete = async (req, res) => {
  await new repository().delete(req.params.id);
  res.status(202).send("Produto excluído com sucesso!");
}

module.exports = produtoController;