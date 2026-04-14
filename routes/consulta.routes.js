const express = require('express');
const router = express.Router();
const usuarioController = require('../../AVALIACAO_DdS_KSTC/src/controllers/usuarios.controller');

router.get('/', consultaController.listarConsultas);
router.get('/:id', consultaController.buscarConsultaPorId);
router.post('/', consultaController.criarConsulta);

module.exports = router;
