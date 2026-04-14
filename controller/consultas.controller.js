const consultaService = require('../services/consultas.services');

// GET /usuarios
const listarConsultas = async (req, res) => {
  try {
    const consulta = await consultaService.listarTodasConsultas();
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
    const { animal_id,  data_consulta, motivo, diagnostico, veterinario } = req.body;
    const novoConsulta = await consultaService.criarConsulta({ 
      animal_id, 
      data_consulta,
       motivo,
        diagnostico, 
        veterinario
        });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'consulta marcada com sucesso!',
      consulta: novoConsulta,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarConsultas, buscarConsultasPorId, criarConsulta };
