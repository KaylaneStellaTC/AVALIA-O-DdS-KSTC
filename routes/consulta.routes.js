const express = require('express');
const router = express.Router();
const consultaController = require('../controller/consultas.controller');

router.get('/', consultaController.listarConsultas);
router.get('/:id', consultaController.buscarConsultasPorId);
router.post('/', consultaController.criarConsulta);

module.exports = router;
