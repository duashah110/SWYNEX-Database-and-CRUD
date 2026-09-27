# SWYNEX Database and CRUD

A backend API project created for the SWYNEX Technologies Backend Developer Internship - Task 2.

## Project Overview

This project demonstrates a backend API connected to a MariaDB database.

The API provides CRUD operations for an expense resource:

- Create an expense
- Read expenses
- Update an expense
- Delete an expense
- Basic input validation

## Technologies Used

- Node.js
- Express.js
- MariaDB
- MySQL2
- dotenv
- Git
- GitHub

## Project Structure

SWYNEX-Database-and-CRUD/
│
├── .env
├── .gitignore
├── database.sql
├── db.js
├── package-lock.json
├── package.json
├── README.md
└── server.js

## Database Setup

The project uses MariaDB with a database named:

swynex_crud

The database contains an `expenses` table with the following fields:

- id
- title
- amount
- category
- created_at

The database structure is available in `database.sql`.

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL

Move into the project folder:

cd SWYNEX-Database-and-CRUD

Install dependencies:

npm install
Environment Configuration

Create a .env file in the project root:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=swynex_crud
PORT=5000

Do not upload the .env file to GitHub.

Running the Project

Start the server:

node server.js

The API will run at:

http://localhost:5000
API Endpoints
Health Check
GET /health
Get All Expenses
GET /api/expenses
Create Expense
POST /api/expenses

Example request:

{
  "title": "Lunch",
  "amount": 500,
  "category": "Food"
}
Update Expense
PUT /api/expenses/:id

Example request:

{
  "title": "Dinner",
  "amount": 800,
  "category": "Food"
}
Delete Expense
DELETE /api/expenses/:id
Validation

The API checks that title, amount, and category are provided when creating or updating an expense.

Task Information

Company: SWYNEX Technologies

Internship: Backend Developer Internship

Task: Task 2 - Database and CRUD

Intern: Dua Shah

Task Objective

The objective of this task is to connect a backend API to a database and implement persistent Create, Read, Update, and Delete operations with basic validation.
