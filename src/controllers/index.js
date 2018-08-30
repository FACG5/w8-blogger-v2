const express = require('express');
const { verify } = require('jsonwebtoken');

const home = require('./home');
const error = require('./error');
const user = require('./servePage');
const auth = require('./authentication');
const comment = require('./addComment');

const router = express.Router();

// add home route
router.get('/', home.get);
router.get('/login', user.login);
router.get('/signup', user.signup);

router.post('/login', auth.login);
router.post('/signup', auth.signup);
router.get('/testauth', isLogedIn, (req, res) => {
  res.send(req.jwt);
});

router.post('/comment/create', isLogedIn, comment.postComment);

router.use(error.pageNotFound);
router.use(error.serverError);

function isLogedIn(req, res, next) {
  console.log(req.cookies);
  if (!req.cookies) return res.redirect('/');
  const { jwt } = req.cookies;
  if (!jwt) return res.redirect('/');

  verify(jwt, process.env.SECRET, (err, jwt) => {
    if (err) res.redirect('/');
    else {
      req.jwt = jwt;
      next();
    }
  });
}

module.exports = router;
