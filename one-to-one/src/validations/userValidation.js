const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(100).required(),
    dateOfBirth: Joi.date().less('now').required(),
    bio: Joi.string().max(500).allow(null, ''),
    avatarUrl: Joi.string().uri().allow(null, ''),
    address: Joi.string().allow(null, ''),
    phone: Joi.string().pattern(new RegExp('^[0-9]{10,15}$')).allow(null, '')
});

module.exports = { userSchema };
