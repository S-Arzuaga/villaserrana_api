const { Client } = require('pg');

async function getConnection() {
  console.log('comenzando la conexion...');
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'santi',
    password: 'admin123',
    database: 'my_store',
  });
  await client.connect();
  console.log('conexion con exito');

  return client;
}

module.exports = getConnection;
