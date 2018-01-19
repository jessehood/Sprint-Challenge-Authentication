const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const user = await User.create(req.user);
  console.log(user);
};

module.exports = {
  createUser
};
