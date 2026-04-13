// Lista todas as consultas
const listarTodasConsultas = async () => {
  return consultas;
};

// Busca uma consulta específica pelo ID
const buscarConsultasPorId = async (id) => {
  const consulta = consultas.find((item) => item.id === Number(id));
  return consulta || null;
};

// Criar uma nova consulta
const criarConsulta = async ({ id, animal_id, data_consulta, motivo, diagnosico,
veterinario}) => {
  if (!data_consulta || !animal_id || !veterinario) {
    throw new Error('Data da consulta, ID do animal e ID do veterinário são obrigatórios.');
  }
  const novaConsulta = {
    id: consultas.length + 1,
    data_consulta,
    animal_id,
    motivo,
    diagnosico,
    veterinario
  };
  consultas.push(novaConsulta);
  return novaConsulta;
};

module.exports = { listarTodasConsultas, buscarConsultasPorId, criarConsulta };
