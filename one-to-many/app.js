const express = require('express');
const sequelize = require('./src/config/db');
const authorRoutes = require('./src/routes/authorRoutes');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', authorRoutes);
app.use('/api', bookRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server initialization
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

module.exports = app;
