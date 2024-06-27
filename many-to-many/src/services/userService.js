
const { User } = require('../models');

const createUser = async (data) => {
  console.log(data);
  const user = await User.create(data);
  console.log(user);
  return user;
};

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId);
  return user;
};

const updateUser = async (userId, data) => {
  const [updated] = await User.update(data, { where: { id: userId } });
  if (updated) {
    const updatedUser = await User.findByPk(userId);
    return updatedUser;
  }
  return null;
};

const deleteUser = async (userId) => {
  const deleted = await User.destroy({ where: { id: userId } });
  return deleted;
};

const searchUsers = async (query) => {
  const users = await User.findAll({ where: { username: { [Op.like]: `%${query}%` } } });
  return users;
};

const filterUsers = async (filters) => {
  const users = await User.findAll({ where: filters });
  return users;
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
