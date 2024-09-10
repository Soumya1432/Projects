
# Notes Taking App

This is a full-stack notes-taking application that allows users to create, view, update, and delete notes. The frontend is built using React.js with Tailwind CSS for styling, and the backend uses Node.js, Express, MySQL, and Sequelize ORM for handling database operations.

## Features

`Create, read, update, and delete notes`

`Persistent data storage with MySQL`

`RESTful API architecture`

`Modern, responsive user interface`

`Sequelize ORM for managing database interactions`


## Tech Stack

**Client:** React, , TailwindCSS

**Server:** Node.js, Express.js, Sequelize ORM, MySQL

**Database:** MySQL (with mysql2 package for Node.js)



## Installation

**Prerequisites**

Make sure you have the following installed:

Node.js
MySQL

**Clone this repository**


```bash
 git clone https://github.com/Soumya1432/Projects.git
  cd Projects
```
    
**Backend Setup**
```bash
  cd backend
  npm install
```
***start the server***
```bash
 npm run dev
 ```
**Frontend Setup**
```bash
  cd frontend
  npm install
```
***start the server***
```bash
 npm run dev
```

## API Reference

#### Get all items

```http
  GET /notes    -- fetch all notes
```
```http
  POST /notes   -- create a new note
```
```http
  PUT /notes/:id  -- update an existing note by ID
```
```http
  DELETE /notes/:id  -- delete a note by ID
```


#### Get item

```http
  GET /api/items/${id}
```

***DATABSE SCHEMA***

```sql
 CREATE TABLE `notes` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

