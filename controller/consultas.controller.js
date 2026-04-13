const animaisService = require('../services/consultas.service');

// GET /usuarios
const listarConsultas = async (req, res) => {
  try {
    const consulta = await consultaService.listarTodosConsultas();
    res.status(200).json({ total: animal.length, animal });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar consultas.' });
  }
};

// GET /usuarios/:id — Busca usuario por ID
const buscarConsultasPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const consulta = await consultaService.buscarConsultasPorId(id);

    if (!consulta) {
      return res.status(404).json({ erro: `consulta ${id} não encontrado.` });
    }

    res.status(200).json({ consulta });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar consulta.' });
  }
};

// POST /usuarios — Cadastra novo usuario
const criarConsulta = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoConsulta = await consultaService.criarconsulta({ nome, email });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'pet cadastrado com sucesso!',
      animal: novoAnimal,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarAnimais, buscarAnimaisPorId, criarAnimal };
