const express = require('express');
const customerRouter = express.Router();

const { registerController } = require('../controller');

customerRouter.post('/api/customer/register', registerController);

module.exports = {
  customerRouter,
};
