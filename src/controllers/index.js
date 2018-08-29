const express = require('express');

const home = require('./home');
const error = require('./error');

const router = express.Router();

// add home route
router.get('/', home.get);
router.use(error.pageNotFound);
router.use(error.serverError);

module.exports = router;
