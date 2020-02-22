const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('./secrets.js');
const User = require('../users/users-model.js');

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if(req.decodedJwt) {
    next();
  }else if(token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedJwt) => {
      if(err) {
        res.status(500).json({
          message: "There's been an error",
          error: err
        })
      }else {
        req.decodedJwt = decodedJwt;
        next();
      }
    })
  }else {
    res.status(401).json({ you: 'shall not pass!' });
  }
};
