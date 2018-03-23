const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const newUser = new User({ username, password });
  newUser
    .save()
    .then(user => {
      console.log(user)
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error saving user!' });
    });
};

module.exports = {
  createUser
};
