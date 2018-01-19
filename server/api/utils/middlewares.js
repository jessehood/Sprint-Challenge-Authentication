const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModels');
const { mysecret } = require('../../config');
const SaltRounds = 11;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
};

const encryptUserPW = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username) return res.status(422).json({err: 'username required'});
  if (!password) return res.status(422).json({err: 'password required'});
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // Once the password is encrypted using bcrypt you'll need to set a user obj on req.user with the encrypted PW
  // Once the user is set, call next and head back into the userController to save it to the DB
  const hash = await bcrypt.hash(password, (await bcrypt.genSalt(SaltRounds)));
  req.user = { username, password: hash };
  next();
};

const compareUserPW = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username) return res.status(422).json({err: 'username required'});
  if (!password) return res.status(422).json({err: 'password required'});
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password comparing, bcrypt.compare()
  // You'll need to find the user in your DB
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
  // If the passwords match set the username on `req` ==> req.username = user.username; and call next();
  const user = await User.findOne({ username });
  if (!user) return res.status(422).json({err: {type: 'USER_NOT_FOUND', message: 'User not found'}});
  const result = await bcrypt.compare(password, user.password);
  if (result) {
    console.log('matching');
    req.username = user.username;
  next();
  } else {
    return res.status(422).json({err: 'Invalid username/password combination.'});
  }

};

module.exports = {
  authenticate,
  encryptUserPW,
  compareUserPW
};
