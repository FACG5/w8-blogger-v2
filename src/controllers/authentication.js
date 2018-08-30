const { sign } = require('jsonwebtoken');

const { comparePasswords, hashPassword } = require('./../utilty/auth');
const { addUser } = require('./../database/queries/addData');
const { getPasswordByEmail } = require('./../database/queries/getData');

exports.login = (req, res) => {
  getPasswordByEmail(req.body.email)
    .then((result) => {
      comparePasswords(req.body.password, result.rows[0].password).then(() => {
        const user = {
          id: result.rows[0].user_id,
        };
        const loginJWT = sign(user, process.env.SECRET);
        res.cookie('jwt', loginJWT, { maxAge: 900000 });
        res.redirect('/');
      });
    }).catch((err) => {
      // handle error
      res.status(303).redirect('/login');
    });
};

exports.signup = (req, res) => {
  hashPassword(req.body.password)
    .then((hashpassword) => {
      const obj = req.body;
      obj.password = hashpassword;
      return addUser(obj);
    }).then(result => res.redirect('/login'))
    .catch((err) => {
      // handle error
      res.send('not ok');
    });
};
