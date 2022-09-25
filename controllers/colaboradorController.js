'use strict'

require('../models/colaborador');
const repository = require('../repositories/colaboradorRepository');

function colaboradorController() {}

colaboradorController.prototype.post = async (req, res) => {
  await new repository().create(req.body);
  res.status(201).send("Colaborador cadastrado com sucesso!");
}

colaboradorController.prototype.put = async (req, res) => {
  await new repository().update(req.params.id, req.body);
  res.status(202).send("Colaborador atualizado com sucesso!");
}

colaboradorController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll();
  lista 
    ? res.status(200).send(lista)
    : res.status(404).send("Nenhum colaborador cadastrado!");
}

colaboradorController.prototype.getById = async (req, res) => {
  let colaborador = await new repository().getById(req.params.id);
  colaborador 
    ? res.status(200).send(colaborador)
    : res.status(400).send("Nenhum colaborador cadastrado com o ID informado!");
}

colaboradorController.prototype.delete = async (req, res) => {
  await new repository().delete(req.params.id);
  res.status(202).send("Colaborador excluído com sucesso!");
}

module.exports = colaboradorController;