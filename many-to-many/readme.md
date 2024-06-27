# Express.js and MySQL One-to-One Relationship Example

This project demonstrates how to set up an Express.js application with a MySQL database using Sequelize ORM, showcasing a many-to-many relationship between `User` and `Project` models.

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
   const { Sequelize } = require('sequelize');
   require('dotenv').config();

   const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
   host: process.env.DB_HOST,
   dialect: 'mysql',
   });

   module.exports = sequelize;
   ```
3. **project configuration  in `.env` file:**

   ```javascript
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=elearning
   PORT=3000
   ```

## Project Structure

express-mysql-example/
├── config/
│   ├── db.js
├── controllers/
│   ├── projectController.js
│   ├── userController.js
├── models/
│   ├── index.js
│   ├── project.js
│   ├── user.js
│   ├── projectUser.js
├── routes/
│   ├── projectRoutes.js
│   ├── userRoutes.js
├── services/
│   ├── projectService.js
│   ├── userService.js
├── utils/
│   ├── responseHandler.js
├── app.js
├── package.json
├── .env


## Running the Application

npm start

## Testing the Endpoints

### User's Endpoints

- **Create User**: Use the /api/users endpoint with POST requests and the user JSON data.
- **Get All Users**: Use the /api/users endpoint with GET requests.
- **Get User by ID**: Use the /api/users/:id endpoint with GET requests, where :id is the ID of the user.
- **Update User**: Use the /api/users/:id endpoint with PUT requests, where :id is the ID of the user, and include the updated data.
- **Delete User**: Use the /api/users/:id endpoint with DELETE requests, where :id is the ID of the user.
- **Search Users**: Use the /api/users/search endpoint with GET requests and the search query parameter.
- **Filter Users**: Use the /api/users/filter endpoint with GET requests and the filter query parameters.

### Project's Endpoints

- **Create Project**: Use the /api/projects endpoint with POST requests and the project JSON data.
- **Get All Projects**: Use the /api/projects endpoint with GET requests.
- **Get Project by ID**: Use the /api/projects/:id endpoint with GET requests, where :id is the ID of the project.
- **Update Project**: Use the /api/projects/:id endpoint with PUT requests, where :id is the ID of the project, and include the updated data.
- **Delete Project**: Use the /api/projects/:id endpoint with DELETE requests, where :id is the ID of the project.
- **Search Projects**: Use the /api/projects/search endpoint with GET requests and the search query parameter.
- **Filter Projects**: Use the /api/projects/filter endpoint with GET requests and the filter query parameters.
- **Associate User with Project**: Use the /api/projects/associate endpoint with POST requests and the JSON data containing userId and projectId.
