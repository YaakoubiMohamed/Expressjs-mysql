# Express.js and MySQL One-to-One Relationship Example

This project demonstrates how to set up an Express.js application with a MySQL database using Sequelize ORM, showcasing a one-to-many relationship between `Author` and `Book` models. It includes validation using Joi and follows best practices for a clean and maintainable codebase.

## Prerequisites

- Node.js
- MySQL
- npm or yarn

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/express-mysql-example.git
   cd express-mysql-example
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Nodemon (for auto-refresh during development):**

   ```bash
   npm install --save-dev nodemon
   ```

## Database Configuration

1. **Create a MySQL database:**

   ```sql
   CREATE DATABASE example_db;
   ```

2. **Update the database configuration in `config/db.js` with your MySQL credentials:**

   ```javascript
   const { Sequelize } = require("sequelize");

   const sequelize = new Sequelize("example_db", "username", "password", {
     host: "localhost",
     dialect: "mysql",
   });

   module.exports = sequelize;
   ```

## Project Structure

express-mysql-example/
├── config/
│ └── db.js
├── controllers/
│ └── authorController.js
│ └── bookController.js
├── models/
│ ├── authorModel.js
│ └── bookModel.js
├── routes/
│ └── authorRoutes.js
│ └── bookRoutes.js
├── app.js

## Running the Application

npm start

## Testing the Endpoints

### Author's Endpoints

- **Create Authors**: Use the `/api/authors` endpoint with POST requests and the author JSON data.
- **Get All Authors**: Use the `/api/authors` endpoint with GET requests.
- **Get Author by ID**: Use the `/api/authors/:id` endpoint with GET requests, where `:id` is the ID of the author.
- **Update Author**: Use the `/api/authors/:id` endpoint with PUT requests, where `:id` is the ID of the author, and include the updated data.
- **Delete Author**: Use the `/api/authors/:id` endpoint with DELETE requests, where `:id` is the ID of the author.
- **Search Authors**: Use the `/api/authors/search` endpoint with GET requests and the search query parameter.

### Book's Endpoints

- **Create Books**: Use the `/api/books` endpoint with POST requests and the book JSON data.
- **Get All Books**: Use the `/api/books` endpoint with GET requests.
- **Get Book by ID**: Use the `/api/books/:id` endpoint with GET requests, where `:id` is the ID of the book.
- **Update Book**: Use the `/api/books/:id` endpoint with PUT requests, where `:id` is the ID of the book, and include the updated data.
- **Delete Book**: Use the `/api/books/:id` endpoint with DELETE requests, where `:id` is the ID of the book.
- **Search Books**: Use the `/api/books/search` endpoint with GET requests and the search query parameter.

