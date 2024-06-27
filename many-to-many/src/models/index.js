
const sequelize = require('../config/db');
const User = require('./user');
const Project = require('./project');
const ProjectUser = require('./projectUser');

const syncDatabase = async () => {
  try {
    // Synchronize all models
    await sequelize.sync({ force: true });
    console.log('Database synced!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();

module.exports = {
  User,
  Project,
  ProjectUser,
};
