'use strict'

require('../models/animal');
const repository = require('../repositories/animalRepository');

function animalController() {}

animalController.prototype.post = async (req, res) => {
  await new repository().create(req.body);
  res.status(201).send("Animal cadastrado com sucesso!");
}

animalController.prototype.put = async (req, res) => {
  await new repository().update(req.params.id, req.body);
  res.status(202).send("Animal atualizado com sucesso!");
}

animalController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll();
  lista 
    ? res.status(200).send(lista)
    : res.status(404).send("Nenhum animal cadastrado!");
}

animalController.prototype.getById = async (req, res) => {
  let animal = await new repository().getById(req.params.id);
  animal 
    ? res.status(200).send(animal)
    : res.status(400).send("Nenhum animal cadastrado com o ID informado!");
}

animalController.prototype.delete = async (req, res) => {
  await new repository().delete(req.params.id);
  res.status(202).send("Animal excluído com sucesso!");
}

module.exports = animalController;