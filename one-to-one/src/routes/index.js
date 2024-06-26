const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Create a new user and profile
router.post('/users', userController.createUser);

// Get user with profile
router.get('/users/:id', userController.getUser);

module.exports = router;
