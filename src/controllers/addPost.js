const { post } = require('./../database/queries/addData');

exports.newPost = ({ body }, res, next) => {
 console.log(body);
 res.redirect('/');
};  