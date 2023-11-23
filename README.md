# MERN Stack Person Records Management

## Overview

This project is a simple web application developed with the MERN (MongoDB, Express.js, React, Node.js) stack. It serves as a tool for managing person records, allowing users to perform CRUD (Create, Read, Update, Delete) operations and apply filters based.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Backend](#backend)
    - [Setup](#setup)
    - [API Endpoints](#api-endpoints)
    - [Validation](#validation)
    - [Error Handling](#error-handling)
5. [Frontend](#frontend)
    - [Setup](#setup-frontend)
    - [Components](#components)
    - [React Router](#react-router)
    - [Styling](#styling)
6. [Database](#database)
    - [Schema](#schema)
7. [Best Practices](#best-practices)
8. [Responsiveness](#responsiveness)
9. [How to Run Locally](#how-to-run-locally)
10. [Contributing](#contributing)

## 1. Prerequisites
Ensure MongoDB is running on your machine.
- [Node.js](https://nodejs.org/)
## 2. Getting Started
Clone this repository to your local machine:
```
git clone https://github.com/MohamedYassineFERJAOUI/person-management.git
cd person-management 
```
## 3. Project Structure
The project structure is organized as follows:
* `backend/`: Node.js and Express.js server code.
* `frontend/`: React application code.
* `database/`: MongoDB schema design.

## 4.  Backend
## Setup
### Install backend dependencies:
```
   cd server
   npm install
```
## API Endpoints

- **GET /api/persons**: Retrieve all person records.
- **GET /api/persons/:id**: Retrieve a specific person by ID.
- **POST /api/persons**: Add a new person record.
- **PUT /api/persons/:id**: Update a person record.
- **DELETE /api/persons/:id**: Delete a person record.
- **get /api/person/filter**: Retrieve persons records or filter by name or age.
  
## Validation

Before adding a new person, the system performs the following validations:

- **Email Uniqueness**: Ensure email uniqueness before adding a new person.
- **Required Fields**: Name and age are required fields and must be provided when adding a new person record.

## Error Handling

Proper error handling is implemented for both frontend and backend, displaying meaningful error messages.

## 5.  Frontend
## Setup
### Install frontend dependencies:
```
   cd client
   npm install --legacy-peer-deps
```

## Components
The React application is composed of two distinct component pages: one dedicated to displaying, searching, and deleting persons, while the other is designed for adding and updating person records.

## React Router
React Router is used for navigation between different views.

## Styling
The application uses Material UI and CSS for styling to ensure a clean and user-friendly interface.

## 6.  Database
## Schema
The MongoDB schema in the model/ directory is designed to store person records, including attributes name, age, and email.

## 7.  Best Practices
Follows best practices for coding, including modularization, separation of concerns, and code comments.

## 8.  Responsiveness
The application is designed to be responsive for a seamless user experience on various devices.

## 9.  How to Run Locally
### 1. Start the backend server:
```
   cd server
   npm start
```
### 2. Start the React application in another terminal window:
```
   cd client
   npm start
```

## 10.  Contributing
Feel free to contribute to this project. Fork the repository, make changes, and submit a pull request.
