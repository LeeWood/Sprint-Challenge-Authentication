const db = require('../database/dbConfig.js');

function findById(id) {
  return db('users').where({ id }).first();
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

module.exports = {
  findById,
  add
}