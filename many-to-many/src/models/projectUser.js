const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Project = require('./project');

const ProjectUser = sequelize.define('ProjectUser', {
  projectId: {
    type: DataTypes.INTEGER,
    references: {
      model: Project,
      key: 'id',
    },
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    primaryKey: true,
  },
}, {
  timestamps: true,
  tableName: 'project_users' // Define a custom table name
});

// Define associations
User.belongsToMany(Project, { through: ProjectUser, foreignKey: 'userId' });
Project.belongsToMany(User, { through: ProjectUser, foreignKey: 'projectId' });

module.exports = ProjectUser;
