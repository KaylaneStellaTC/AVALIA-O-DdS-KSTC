// ROUTE: Mapeia URLs para funções do Controller.
// Nada mais, nada menos. Sem lógica, sem processamento.

const router = require('express').Router();
const livroController = require('../../AVALIACAO_DdS_KSTC/src/controllers/livros.controllers');

router.get('/', animalController.listarAnimais);
router.get('/:id', animalController.buscarAnimalPorId);
router.post('/', animalController.criarAnimal);

module.exports = router;
