'use strict'

const express = require('express')

const controller = require('../controllers/animalController')

const router = express.Router()

let _routeController = new controller()

router.get('/', _routeController.get)
router.get('/:id', _routeController.getById)
router.post('/', _routeController.post)
router.put('/:id', _routeController.put)
router.delete('/:id', _routeController.delete)

module.exports = router