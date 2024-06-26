const { Book, validateBook } = require('../models/bookModel');
const { Author } = require('../models/authorModel');
const { Op } = require('sequelize');

exports.createBook = async (req, res) => {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBooks = async (req, res) => {
  const { title, genre, publishedDate, authorId } = req.query;
  const whereClause = {};

  if (title) whereClause.title = { [Op.like]: `%${title}%` };
  if (genre) whereClause.genre = { [Op.like]: `%${genre}%` };
  if (publishedDate) whereClause.publishedDate = publishedDate;
  if (authorId) whereClause.authorId = authorId;

  try {
    const books = await Book.findAll({
      where: whereClause,
      include: Author,
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id, {
      include: Author,
    });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { error } = validateBook(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    await book.update(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    await book.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchBooks = async (req, res) => {
  const { search } = req.query;
  if (!search) return res.status(400).json({ error: 'Search query is required' });

  try {
    const books = await Book.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${search}%` } },
          { genre: { [Op.like]: `%${search}%` } },
          { summary: { [Op.like]: `%${search}%` } },
        ],
      },
      include: Author,
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
