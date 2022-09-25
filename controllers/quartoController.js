'use strict'

require('../models/quarto');
const repository = require('../repositories/quartoRepository');

function quartoController() {}

quartoController.prototype.post = async (req, res) => {
  await new repository().create(req.body);
  res.status(201).send("Quarto cadastrado com sucesso!");
}

quartoController.prototype.put = async (req, res) => {
  await new repository().update(req.params.id, req.body);
  res.status(202).send("Quarto atualizado com sucesso!");
}

quartoController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll();
  lista 
    ? res.status(200).send(lista)
    : res.status(404).send("Nenhum quarto cadastrado!");
}

quartoController.prototype.getById = async (req, res) => {
  let quarto = await new repository().getById(req.params.id);
  quarto 
    ? res.status(200).send(quarto)
    : res.status(400).send("Nenhum quarto cadastrado com o ID informado!");
}

quartoController.prototype.delete = async (req, res) => {
  await new repository().delete(req.params.id);
  res.status(202).send("Quarto excluído com sucesso!");
}

module.exports = quartoController;