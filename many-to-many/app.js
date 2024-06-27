
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const projectRoutes = require('./src/routes/projectRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api', projectRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
