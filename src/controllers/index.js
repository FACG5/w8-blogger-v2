const express = require('express');
const { verify } = require('jsonwebtoken');

const home = require('./home');
const error = require('./error');
const user = require('./servePage');
const auth = require('./authentication');
const comment = require('./addComment');
const post = require('./addPost');

const router = express.Router();

// add home route
router.get('/',isLogedIn, home.get);

router.post('/comment/create', isLogedIn, comment.postComment);
router.post('/post/create', isLogedIn, post.newPost);

router.get('/login', user.login);
router.get('/signup', user.signup);

router.post('/login', auth.login);
router.post('/signup', auth.signup);

router.get('/logout', auth.signout);

router.use(error.pageNotFound);
router.use(error.serverError);

function isLogedIn(req, res, next) {
  req.userAuth = false;
  if (req.cookies) {
    const { jwt } = req.cookies;
    if (jwt) {
      verify(jwt, process.env.SECRET, (err, jwt) => {
        if (err) {
          return;
        }
        req.userAuth = true;
        req.jwt = jwt;
      });
    }
  }
  next();
}

module.exports = router;
