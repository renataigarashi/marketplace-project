const User = require('../model/User');

const findUserByIdService = (id) => {
  return User.findById(id);
};

const findAllUserService = () => {
  return User.find();
};

const createUserService = (body) => {
  return User.create(body);
};

const updateUserService = (id, body) => {
  return User.findByIdAndUpdate(id, body, { returnDocument: 'after' });
};

const removeUserService = (id) => {
  return User.findByIdAndDelete(id);
};

const addUserAddressService = (id, address) => {};

const removeUserAddressService = (id) => {};

const addUserFavProductService = (id, product) => {};

const removeUserFavProductService = (id) => {};

module.exports = {
  findUserByIdService,
  findAllUserService,
  createUserService,
  updateUserService,
  removeUserService,
  addUserAddressService,
  removeUserAddressService,
  addUserFavProductService,
  removeUserFavProductService
};
