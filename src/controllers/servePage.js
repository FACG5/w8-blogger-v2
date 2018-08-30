const { addUser } = require('../database/queries/addData');


exports.login = (req, res) => {
  res.render('login', {js:'login.js',css:'login'});
};

exports.signup = (req, res) => {
  res.render('signup', { js:'signup.js' ,css:'signup'});
};
