const db = require('../dbConnection.js');

const getposts = () => db.query('select posts.post_id , (select name from users where users.user_id = posts.user_id) as user_name, array_agg(comments.comment_body) as comment_body,posts.post_body, array_agg((select name from users where users.user_id = comments.user_id)) as name from posts left join comments on posts.post_id = comments.post_id group by posts.post_body, user_name, posts.post_id');

const getPasswordByEmail = email => db.query('select password, user_id, name from users where email = $1', [email]);

module.exports = { getposts, getPasswordByEmail };
