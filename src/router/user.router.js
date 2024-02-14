const express = require('express');
const router = express();
const userController = require('../controller/user.controller');

// GET
router.get('/findById/:id', userController.findUserByIdController);
router.get('/findAll', userController.findAllUserController);

// POST
router.post('/create', userController.createUserController);
router.post('/addAddress/:id', userController.addUserAddressController);
router.post('/addFavProduct/:id', userController.addUserFavProduct);

// PUT
router.put('/update/:id', userController.updateUserController);

// DELETE
router.delete('/remove/:id', userController.removeUserController);
router.delete('/removeAddress', userController.removeUserAddressController);
router.delete('/removeFavProduct', userController.removeUserFavProduct);

module.exports = router;
