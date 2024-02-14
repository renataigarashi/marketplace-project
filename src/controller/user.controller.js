const userService = require('../service/user.service');
const findUserByIdController = async (req, res) => {
  try {
    const user = await userService.findUserByIdService(req.params.id);

    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }

    res.status(200).send(user);
  } catch (err) {
    if (err.kind == 'ObjectId') {
      console.log(err.kind);
      return res.status(400).send({ message: `Incorrect ID, try again` });
    }
    console.log('err: ', err.message);
    return res.status(500).send({ message: `Unexpected error, try again!` });
  }
};

const findAllUserController = async (req, res) => {
  try {
    return res.status(200).send(await userService.findAllUserService());
  } catch (err) {
    console.log('err: ', err);
    return res.status(500).send({ message: `Unexpected err, try again!` });
  }
};

const createUserController = async (req, res) => {
  try {
    const body = req.body;

    if (!body.name) {
      return res.status(400).send({ message: `Field 'name' must be filled` });
    }
    return res.status(201).send(await userService.createUserService(body));
  } catch (err) {
    console.log('err: ', err);
    return res.status(500).send({ message: `Unexpected err, try again!` });
  }
};

const updateUserController = async (req, res) => {
  try {
    const body = req.body;

    if (!body.name) {
      return res.status(400).send({ message: `Field 'name' must be filled` });
    }
    return res.send(await userService.updateUserService(req.params.id, body));
  } catch (err) {
    console.log('err: ', err);
    return res.status(500).send({ message: `Unexpected err, try again!` });
  }
};

const removeUserController = async (req, res) => {
  try {
    const deleteUser = await userService.removeUserService(req.params.id);
    if (deleteUser.deletedCount > 0) {
      return res.status(200).send({ message: `User deleted sucessfully!` });
    } else {
      return res.status(404).send({ message: `User not founs, try again!` });
    }
  } catch (err) {
    console.log('err: ', err);
    return res.status(500).send({ message: `Unexpected err, try again!` });
  }
};

const addUserAddressController = async (req, res) => {
  try {
  } catch (err) {
    console.log('err: ', err);
    return res.status(500).send({ message: `Unexpected err, try again!` });
  }
};

const removeUserAddressController = async (req, res) => {
  try {
  } catch (err) {
    console.log('err: ', err);
    return res.status(500).send({ message: `Unexpected err, try again!` });
  }
};

const addUserFavProductController = async (req, res) => {
  try {
  } catch (err) {
    console.log('err: ', err);
    return res.status(500).send({ message: `Unexpected err, try again!` });
  }
};

const removeUserFavProductController = async (req, res) => {
  try {
  } catch (err) {
    console.log('err: ', err);
    return res.status(500).send({ message: `Unexpected err, try again!` });
  }
};

module.exports = {
  findUserByIdController,
  findAllUserController,
  createUserController,
  updateUserController,
  removeUserController,
  addUserAddressController,
  removeUserAddressController,
  addUserFavProductController,
  removeUserFavProductController
};
