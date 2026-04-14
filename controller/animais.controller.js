const animalService = require('../services/animais.services');

// GET /usuarios
const listarAnimais = async (req, res) => {
  try {
    const animal = await animalService.listarTodosAnimais();
    res.status(200).json({ total: animal.length, animal });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar pets.' });
  }
};

// GET /usuarios/:id — Busca usuario por ID
const buscarAnimaisPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await animalService.buscarAnimaisPorId(id);

    if (!animal) {
      return res.status(404).json({ erro: `pet ${id} não encontrado.` });
    }

    res.status(200).json({ animal });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar pet.' });
  }
};

// POST /usuarios — Cadastra novo usuario
const criarAnimal = async (req, res) => {
  try {
    const { nome, especie, raca, data_nascimento, tutor_id } = req.body;
    const novoAnimal = await animalService.criaranimal({
      nome, 
      especie, 
      raca, 
      data_nascimento, 
      tutor_id
    });

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
