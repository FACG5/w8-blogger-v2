const db = require('../dbConnection.js');

const delPost = (post_id) => {
  db.query('DELETE FROM posts WHERE post_id = $1', [post_id]);
};

module.exports = delPost;


// DELETE FROM posts WHERE post_id = $1;
