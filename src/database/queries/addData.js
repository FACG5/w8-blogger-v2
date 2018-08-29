const db = require('../dbConnection.js');

const addUser = (user) => {
  const {
    name,
    email,
    password,
  } = user;
  return db.query('INSERT INTO users(name, email, password) VALUES ($1,$2,$3) RETURNING user_id', [name, email, password]);
};
