const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  try {
    const user = await User.create(req.user);
    res.status(200).json(user);
  } catch(err) {
    res.status(422).json(err);
  }
};

module.exports = {
  createUser
};
