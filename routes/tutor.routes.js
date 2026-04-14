const express = require('express');
const router = express.Router();
const tutorController = require('../controller/tutores.controller');

router.get('/', tutorController.listarTutores);
router.get('/:id', tutorController.buscarTutoresPorId);
router.post('/', tutorController.criarTutor);

module.exports = router;
