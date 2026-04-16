// Lista todas as consultas

const pool = require ('../database/db')

const listarTodasConsultas = async () => {
 try{
  const  resultado = await pool.query('SELECT*FROM consultas ORDER BY id');
  return resultado.rows;
}catch(error){
console.log('erro ao listar todos os consultas',error.message)
// throw err;
// 
}
};

// Busca uma consulta específica pelo ID
const buscarConsultasPorId = async (id) => {
  const resultado = await pool.query ('SELECT *FROM consultas WHERE id = $1',[id,]);
  return resultado.rows[0]

};

// Criar uma nova consulta
const criarConsulta = async ({ animal_id, data_consulta, motivo, diagnosico,
veterinario}) => {
 try{
  const query = `INSERT INTO consultas (animal_id, data_consulta, motivo, diagnosico,
veterinario) VALUES ($1, $2,$3, $4, $5)RETURNING*`;
  const res = await  pool.query ([ animal_id, data_consulta, motivo, diagnosico,
veterinario ])
     return res.rows[0];
}catch(error){
  console.log('erro ao adicinar consulta', error.message)
}
};

module.exports = { listarTodasConsultas, buscarConsultasPorId, criarConsulta };





