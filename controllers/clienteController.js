'use strict'

require('../models/cliente');
const repository = require('../repositories/clienteRepository');

function clienteController() {}

clienteController.prototype.post = async (req, res) => {
  await new repository().create(req.body);
  res.status(201).send("Cliente cadastrado com sucesso!");
}

clienteController.prototype.put = async (req, res) => {
  await new repository().update(req.params.id, req.body);
  res.status(202).send("Cliente atualizado com sucesso!");
}

clienteController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll();
  lista 
    ? res.status(200).send(lista)
    : res.status(404).send("Nenhum cliente cadastrado!");
}

clienteController.prototype.getById = async (req, res) => {
  let cliente = await new repository().getById(req.params.id);
  cliente 
    ? res.status(200).send(cliente)
    : res.status(400).send("Nenhum cliente cadastrado com o ID informado!");
}

clienteController.prototype.delete = async (req, res) => {
  await new repository().delete(req.params.id);
  res.status(202).send("Cliente excluído com sucesso!");
}

module.exports = clienteController;