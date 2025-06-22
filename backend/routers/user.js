const express = require('express');
const userRouter = express.Router();

// CUSTOM MODULES

const { VALIDATEREGISTER } = require('../middleware/user');

const { login, register } = require('../controllers/user');

userRouter.post('/login', login);
userRouter.post('/register', VALIDATEREGISTER, register);

module.exports = userRouter;




