const { User, Profile } = require('../models');
const Joi = require('joi');
const { userSchema } = require('../validations/userValidation');

exports.createUser = async (req, res) => {
    const { error, value } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, password, dateOfBirth, bio, avatarUrl, address, phone } = value;
    console.log(req.body);

    try {
        const user = await User.create({ name, email, password, dateOfBirth });
        const profile = await Profile.create({ bio, avatarUrl, address, phone, user_id: user.id });
        res.status(201).json({ user, profile });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: Profile
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
