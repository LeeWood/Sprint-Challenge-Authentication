const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jws = require('jsonwebtoken');

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
