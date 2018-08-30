const { addUser } = require('../database/queries/addData');


exports.login = (req, res) => {
  res.render('login');
};

exports.signup = (req, res) => {
  res.render('signup');
};
