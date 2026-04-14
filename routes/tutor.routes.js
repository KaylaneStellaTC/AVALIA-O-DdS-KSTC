const express = require('express');
const router = express.Router();
const tutorController = require('../../AVALIACAO_DdS_KSTC/src/controllers/usuarios.controller');

router.get('/', tutorController.listarTutores);
router.get('/:id', tutorController.buscarTutorPorId);
router.post('/', tutorController.criarTutor);

module.exports = router;
