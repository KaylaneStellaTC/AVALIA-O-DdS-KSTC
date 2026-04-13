const pool = require ('../database/connections')
  
// Lista todos os livros do acervo
const listarTodosAnimais = async () => {
try{
  const  resultado = await pool.query('SELECT*FROM animais ORDER BY id');
  return resultado.rows;
}catch(error){
console.log('erro ao digitar todos os animais',error.message)
// throw err;
// 
};
}

// Busca um livro específico pelo ID
const buscarAnimaisPorId = async (id) => {
  const resultado = await pool.query ('SELECT *FROM animais WHERE id = $1',[id,]);
  return resultado.rows[0]

};

// Criar um novo livro no acervo
const adicionarAnimal = async ({id, nome, especie, raca, data_nascimento, tutor_id  }) => {
try{
  const query = `INSERT INTO livros (id, nome, especie, raca, data_nascimento, tutor_id) VALUES ($1, $2,$3, $4, $5)RETURNING*`;
  const res = await  pool.query ([ id,
     nome,
      especie,
      raca,
       data_nascimento, 
       tutor_id
     ])
     return res.rows[0];
}catch(error){
  console.log('erro ao adicinar animal')
}
};

module.exports = { listarTodosAnimais, buscarAnimaisPorId,adicionarAnimal  };
