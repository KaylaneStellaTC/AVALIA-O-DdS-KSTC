const logger = require('./logger.middlewares');
const autenticar = require('./auth.middlewares');
const errorHandler = require('./errorHandle.middlewares');
const validarContentType = require('./contentType.middlewares');

module.exports = {
  logger,
  autenticar,
  errorHandler,
  validarContentType
};
