// Lista todos os tutores
const listarTodosTutores = async () => {
  return tutores;
};

// Busca um tutor específico pelo ID
const buscartutoresPorId = async (id) => {
  const tutores = tutores.find((item) => item.id === Number(id));
  return tutores || null;
};

// Criar um novo tutores
const criarTutor = async ({ nome, telefone, email }) => {
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }
  const novoTutor = {
    id: tutores.length + 1,
    nome,
    telefone,
    email,
  };
  tutores.push(novoTutor);
  return novoTutor;
};

module.exports = { listarTodosTutores, buscartutoresPorId, criarTutor };
