const { addUser } = require('../database/queries/addData');


exports.login = (req, res) => {
  res.render('login', {js:'login.js'});
};

exports.signup = (req, res) => {
  res.render('signup', {js:'signup.js'});
};
