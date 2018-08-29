const db = require('../dbConnection.js');

const addUser = (user) => {
  const {
    name,
    email,
    password,
  } = user;
  return db.query('INSERT INTO users(name, email, password) VALUES ($1,$2,$3) RETURNING user_id', [name, email, password]);
};

const addPost = (post) => {
  const {
    body,
    userid,
  } = post;
  return db.query('INSERT INTO posts (post_body,user_id) VALUES ($1,$2) RETURNING post_id', [body, userid]);
};

const addComment = (comment) => {
  const {
    body,
    userid,
    postid,
  } = comment;
  return db.query('INSERT INTO comments (comment_body,user_id ,post_id) VALUES ($1,$2,$3) RETURNING comment_id', [body, userid, postid]);
};
module.exports = { addUser, addPost, addComment };
