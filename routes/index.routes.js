const express = require('express');
const router = express.Router();
// Importação das Rotas
const animalRoute = require('./animal.routes');
const tutorRoute = require('./tutor.routes');
// Importação Seletiva de Middlewares
const { autenticar, validarContentType } = require('../middlewares/main.middlewares');

// 1. Rota Raiz (Totalmente Pública)
router.get('/', (req, res) => {
  res.json({ sistema: 'veterinaria', status: 'Online' });
});

// 2. Aplicando a "Barreira" de Segurança
// A partir daqui, TUDO exige token e JSON correto
router.use(autenticar);
router.use(validarContentType);

// 3. Rotas Protegidas
router.use('/animais', animalRoute);
router.use('/tutores', tutorRoute);

// 4. Rota 404 - Caso nenhuma rota acima seja encontrada
router.use((req, res) => {
  res
    .status(404)
    .json({ erro: 'Rota não encontrada na veterinaria.' });
});

module.exports = router;
