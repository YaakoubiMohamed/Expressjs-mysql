# Express.js and MySQL One-to-One Relationship Example

This project demonstrates how to set up an Express.js application with a MySQL database using Sequelize ORM, showcasing a one-to-one relationship between `User` and `Profile` models. It includes validation using Joi and follows best practices for a clean and maintainable codebase.

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
│ └── userController.js
├── models/
│ ├── index.js
│ ├── user.js
│ └── profile.js
├── validations/
│ └── userValidation.js
├── routes/
│ └── index.js
├── app.js
└── server.js


## Running the Application
npx nodemon server.js

## Testing the Endpoints
### Create a New User

Send a POST request to http://localhost:3000/api/users with the following JSON payload:
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "StrongPassword123",
  "dateOfBirth": "1990-01-01",
  "bio": "A passionate software developer.",
  "avatarUrl": "https://example.com/avatar.jpg",
  "address": "123 Main St, Anytown, USA",
  "phone": "1234567890"
}
### Get User with Profile
Send a GET request to http://localhost:3000/api/users/{id}, replacing {id} with the user's ID.