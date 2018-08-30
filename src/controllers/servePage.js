const { addUser } = require('../database/queries/addData');


exports.login = (req, res) => {
  console.log('this login get');
  res.render('login', {js:'login.js'});
};

exports.signup = (req, res) => {
  res.render('signup', {js:'signup.js'});
};
