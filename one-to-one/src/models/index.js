const sequelize = require('../config/db');
const User = require('./user');
const Profile = require('./profile');

// Sync all models
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    });

module.exports = {
    User,
    Profile
};
