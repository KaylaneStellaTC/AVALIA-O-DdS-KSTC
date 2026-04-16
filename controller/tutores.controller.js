// CONTROLLER: Coordena a comunicação entre a Rota e o Service.
// Extrai dados do req, chama o Service e formata a resposta com res.
// Nunca contém regra de negócio — apenas orquestração.

const tutoreService = require('../services/tutores.services');

// GET /livros — Lista todos os tutores
const listarTutores = async (req, res) => {
  try {
    const tutores = await tutorService.listarTodosTutores();
    res.status(200).json({ total: tutores.length, tutores });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar tutores.' });
  }
};

// GET /livros/:id — Busca livro por ID
const buscarTutoresPorId = async (req, res) => {
  try {
    // Extrai o parâmetro da URL — essa é a responsabilidade do Controller
    const { id } = req.params;
    const tutor = await tutoreService.buscarTutoresPorId(id);

    // Se o Service retornou null, o livro não existe
    if (!tutor) {
      return res
        .status(404)
        .json({ erro: `tutor ${id} não encontrado no acervo.` });
    }

    res.status(200).json({ tutor });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar tutor.' });
  }
};

// POST /livros — Cadastra novo livro
const criarTutor = async (req, res) => {
  try {
    // Extrai os dados do corpo da requisição
    const { nome, telefone, email} = req.body;
    const novoTutor = await tutoreService.criarTutor({
      nome,
      telefone, 
      email
    });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'tutor cadastrado no acervo com sucesso!',
      tutor: novoTutor
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarTutores, buscarTutoresPorId, criarTutor };
