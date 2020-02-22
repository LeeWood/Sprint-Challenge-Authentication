const db = require('../database/dbConfig.js');

function findById(id) {
  return db('auth').where({ id }).first();
}

function add(user) {
  const [id] = await db('auth').insert(user);
  return findById(id);
}

module.exports = {
  findById,
  add
}