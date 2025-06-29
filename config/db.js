const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD, 
  database: 'cake_marketplace'
});

connection.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL Connected!');
});

module.exports = connection;