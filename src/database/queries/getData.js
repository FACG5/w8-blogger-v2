
const db = require('../dbConnection.js');

const getposts = () => db.query('select posts.post_body, array_agg(comments.comment_body), array_agg((select name from users where users.user_id = comments.comment_id)) from posts inner join comments on posts.post_id = comments.post_id group by posts.post_body');

module.exports = { getposts };
