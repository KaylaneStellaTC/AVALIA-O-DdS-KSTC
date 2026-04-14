const express = require('express');
const routes = require('./routes/index.routes');
const { logger, errorHandler } = require('./middlewares/main.middlewares');

const app = express();

// Middlewares de Infraestrutura (Rodam sempre, até para rotas que não existem)
app.use(express.json());
app.use(logger);

// Aciona o Roteador (que já vem com Auth e Content-Type embutidos)
app.use(routes);

// O Handler de Erros deve ser o último de tudo
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[SERVIDOR] veterinaria operando em http://localhost:${PORT}`);
});
