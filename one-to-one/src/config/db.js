const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('example_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;