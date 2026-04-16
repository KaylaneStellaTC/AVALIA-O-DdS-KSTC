// Lista todos os tutores
const pool = require ('../database/db')

const listarTodosTutores = async () => {
  try{
  const  resultado = await pool.query('SELECT*FROM tutores ORDER BY id');
  return resultado.rows;
}catch(error){
console.log('erro ao listar todos os tutores',error.message)
// throw err;
// 
};
}
// Busca um tutor específico pelo ID
const buscartutoresPorId = async (id) => {
  const resultado = await pool.query ('SELECT *FROM tutores WHERE id = $1',[id,]);
  return resultado.rows[0]

};

// Criar um novo tutores
const criarTutor = async ({ nome, telefone, email }) => {
  try{
  const query = `INSERT INTO tutores (nome, telefone, email) VALUES ($1, $2,$3)RETURNING*`;
  const res = await  pool.query ([ nome, telefone, email ])
     return res.rows[0];
}catch(error){
  console.log('erro ao adicinar tutor', error.message)
}
};
module.exports = { listarTodosTutores, buscartutoresPorId, criarTutor };

