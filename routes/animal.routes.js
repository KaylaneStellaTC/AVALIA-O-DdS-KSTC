// ROUTE: Mapeia URLs para funções do Controller.
// Nada mais, nada menos. Sem lógica, sem processamento.

const router = require('express').Router();
const animalController = require('../controller/animais.controller');

router.get('/', animalController.listarAnimais);
router.get('/:id', animalController.buscarAnimaisPorId);
router.post('/', animalController.criarAnimal);

module.exports = router;

