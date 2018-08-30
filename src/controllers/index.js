const express = require('express');

const home = require('./home');
const error = require('./error');
const user = require('./servePage');
const auth = require('./authentication');

const router = express.Router();

// add home route
router.get('/', home.get);
router.get('/login', user.login);
router.get('/signup', user.signup);
router.post('/login', auth.login);
router.post('/signup', auth.signup);

router.use(error.pageNotFound);
router.use(error.serverError);

module.exports = router;
