const User = require('../models/User');
const asyncErrorWrapper = require('express-async-handler');
const sendJwtToClient = require('../helpers/auth/sendJwtToClient');
const CustomError = require('../helpers/errors/CustomError');

const register = asyncErrorWrapper( async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role
  });

  sendJwtToClient(user, res);
}); 

module.exports = {
  register
};