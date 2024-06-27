
const userService = require('../services/userService');
const responseHandler = require('../utils/responseHandler');

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await userService.createUser({ username, email });
    responseHandler.success(res, user, 'User created successfully');
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    responseHandler.success(res, users, 'Users retrieved successfully');
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (user) {
      responseHandler.success(res, user, 'User retrieved successfully');
    } else {
      responseHandler.error(res, 'User not found', 404);
    }
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email } = req.body;
    const user = await userService.updateUser(userId, { username, email });
    if (user) {
      responseHandler.success(res, user, 'User updated successfully');
    } else {
      responseHandler.error(res, 'User not found', 404);
    }
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await userService.deleteUser(userId);
    if (result) {
      responseHandler.success(res, null, 'User deleted successfully');
    } else {
      responseHandler.error(res, 'User not found', 404);
    }
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const searchUsers = async (req, res) => {
  try {
    const { query } = req.query;
    const users = await userService.searchUsers(query);
    responseHandler.success(res, users, 'Users retrieved successfully');
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const filterUsers = async (req, res) => {
  try {
    const filters = req.query;
    const users = await userService.filterUsers(filters);
    responseHandler.success(res, users, 'Users retrieved successfully');
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
  filterUsers,
};
