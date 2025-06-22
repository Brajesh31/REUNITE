const express = require('express');
const claimRouter = express.Router();
// const {VERIFYTOKEN} = require('../authentication/jwt');

const { claim } = require('../controllers/claim');

claimRouter.post('/claim/:itemId', claim);



module.exports = claimRouter;
