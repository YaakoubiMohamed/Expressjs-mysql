const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Author = require('./authorModel').Author;
const Joi = require('joi');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  publishedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: 'id',
    },
  },
});

Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });

const validateBook = (book) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    genre: Joi.string().max(50),
    publishedDate: Joi.date(),
    summary: Joi.string().max(1000),
    authorId: Joi.number().integer().required(),
  });

  return schema.validate(book);
};

module.exports = { Book, validateBook };
