const { Author, validateAuthor } = require('../models/authorModel');
const { Book } = require('../models/bookModel');
const { Op } = require('sequelize');

exports.createAuthor = async (req, res) => {
  const { error } = validateAuthor(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAuthors = async (req, res) => {
  const { name, nationality, birthdate } = req.query;
  const whereClause = {};

  if (name) whereClause.name = { [Op.like]: `%${name}%` };
  if (nationality) whereClause.nationality = { [Op.like]: `%${nationality}%` };
  if (birthdate) whereClause.birthdate = birthdate;

  try {
    const authors = await Author.findAll({
      where: whereClause,
      include: Book,
    });
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAuthorById = async (req, res) => {
  const { id } = req.params;

  try {
    const author = await Author.findByPk(id, {
      include: Book,
    });
    if (!author) return res.status(404).json({ error: 'Author not found' });
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { error } = validateAuthor(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const author = await Author.findByPk(id);
    if (!author) return res.status(404).json({ error: 'Author not found' });

    await author.update(req.body);
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  const { id } = req.params;

  try {
    const author = await Author.findByPk(id);
    if (!author) return res.status(404).json({ error: 'Author not found' });

    await author.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchAuthors = async (req, res) => {
  const { search } = req.query;
  if (!search) return res.status(400).json({ error: 'Search query is required' });

  try {
    const authors = await Author.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { bio: { [Op.like]: `%${search}%` } },
          { nationality: { [Op.like]: `%${search}%` } },
        ],
      },
      include: Book,
    });
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
