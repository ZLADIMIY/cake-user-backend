const db = require('../config/db');

const User = {
  create: (user, callback) => {
    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(sql, [user.email, user.password], callback);
  },
  findByEmail: (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
  },
  updateProfile: (userId, newData, callback) => {
    const sql = 'UPDATE users SET name = ?, phone = ? WHERE id = ?';
    db.query(sql, [newData.name, newData.phone, userId], callback);
  }
};

module.exports = User;