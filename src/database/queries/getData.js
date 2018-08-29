const db = require('../dbConnection.js');

const getposts = () => db.query('select (select name from users where users.user_id = posts.user_id) as user_name, posts.post_body, array_agg(comments.comment_body) as comment_body, array_agg((select name from users where users.user_id = comments.user_id)) as name from posts inner join comments on posts.post_id = comments.post_id group by posts.post_body, user_name');

module.exports = { getposts };
