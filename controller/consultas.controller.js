const consultaService = require('../services/consultas.services');

// GET /usuarios
const listarConsultas = async (req, res) => {
  try {
    const consultas = await consultaService.listarTodasConsultas();
    res.status(200).json({ total: consultas.length, consultas });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar consultas.' });
  }
};

// GET /usuarios/:id — Busca usuario por ID
const buscarConsultasPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const consultas = await consultaService.buscarConsultasPorId(id);

    if (!consultas) {
      return res.status(404).json({ erro: `consulta ${id} não encontrado.` });
    }

    res.status(200).json({ consultas });
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
      consultas: novoConsulta,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarConsultas, buscarConsultasPorId, criarConsulta };
