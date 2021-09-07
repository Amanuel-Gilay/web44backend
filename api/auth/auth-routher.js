const router = require("express").Router();
const {
    validateBody,
    checkusernameTaken,
    checkUsernameExists
} = require('./auth-middleware');
const Users = require('../users/users-model')
const bcrypt = require('bcryptjs')
const tokenBuilder = require('./token-builder')

router.post("/register", validateBody, checkusernameTaken, (req, res, next) => {
    let user = req.user
    const rounds = process.env.BCRYPT_ROUNDS || 8
    const hash = bcrypt.hashSync(user.password, rounds)
    
    user.password = hash
    
    Users.add(user)
      .then(newUser => {
        res.status(201).json(newUser[0])
      })
      .catch(next)
});


router.post("/login", validateBody, checkUsernameExists, (req, res, next) => {
  let { username, password, user_id } = req.dbUser;
  if (bcrypt.compareSync(req.user.password, password)) {
    const token = tokenBuilder({
    user_id,
    username
    })
    res.status(200).json({
      message: `Welcome back ${username}`,
      user_id,
      username,
      token
    })
  } else {
    next({status: 401, message: 'Invalid credentials'})
  }
});

module.exports = router;