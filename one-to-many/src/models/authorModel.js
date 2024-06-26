// models/authorModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Joi = require('joi');

const Author = sequelize.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const validateAuthor = (author) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    bio: Joi.string().max(500).optional(),
    birthdate: Joi.date().optional(),
    nationality: Joi.string().max(50).optional(),
  });

  return schema.validate(author);
};

module.exports = { Author, validateAuthor };
