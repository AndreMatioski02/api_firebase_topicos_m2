'use strict'

require('../models/servico');
const repository = require('../repositories/servicoRepository');

function servicoController() {}

servicoController.prototype.post = async (req, res) => {
  await new repository().create(req.body);
  res.status(201).send("Serviço cadastrado com sucesso!");
}

servicoController.prototype.put = async (req, res) => {
  await new repository().update(req.params.id, req.body);
  res.status(202).send("Serviço atualizado com sucesso!");
}

servicoController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll();
  lista 
    ? res.status(200).send(lista)
    : res.status(404).send("Nenhum serviço cadastrado!");
}

servicoController.prototype.getById = async (req, res) => {
  let servico = await new repository().getById(req.params.id);
  servico 
    ? res.status(200).send(servico)
    : res.status(400).send("Nenhum serviço cadastrado com o ID informado!");
}

servicoController.prototype.delete = async (req, res) => {
  await new repository().delete(req.params.id);
  res.status(202).send("Serviço excluído com sucesso!");
}

module.exports = servicoController;