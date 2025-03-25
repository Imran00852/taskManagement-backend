# Task Management Application

A simple Node.js application that allows users to manage tasks. Users can register, log in, and perform CRUD operations on tasks. 

---

## Features

- **User Authentication**: 
  - Register and log in with secure password hashing using `bcrypt`.
  - JWT-based authentication with cookies for session management.
  
- **Task Management**:
  - Create, read, update, and delete tasks.
  - Each task is associated with a specific user.

- **Error Handling**:
  - Centralized error handling using custom middleware.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Cookies, JWT
- **Password Hashing**: Bcrypt

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/imran00852/taskManagement-backend.git
   cd task-management-app

2. Install dependencies:

   ```bash
   npm install

## .env Configuration

Create a `.env` file in the root directory of the project and add the following variables:

```env
# Server Port
PORT=8080

# MongoDB Connection URI
MONGO_URI=your_mongodb_connection_string

# JWT Secret for Authentication
JWT_SECRET=your_jwt_secret
```

## Starting the Application

To start the application, run the following command:

```bash
npm start
```
## API Endpoints

### User Routes

| Method | Endpoint        | Description             |
|--------|-----------------|-------------------------|
| POST   | `/api/register` | Register a new user     |
| POST   | `/api/login`    | Log in an existing user |

### Task Routes

| Method | Endpoint          | Description                        |
|--------|-------------------|------------------------------------|
| POST   | `/api/tasks`  | Create a new task (auth required) |
| GET    | `/api/tasks`  | Get all tasks for a user (auth required) |
| PUT    | `/api/tasks/:id`  | Update a task by ID (auth required) |
| DELETE | `/api/tasks/:id`  | Delete a task by ID (auth required) |

## How to Use

### Register a User
Send a `POST` request to `/api/register` with the following fields in the request body:
- `username`
- `email`
- `password`

### Log In
Send a `POST` request to `/api/login` with the following fields in the request body:
- `email`
- `password`

Upon success, a cookie will be set for authentication.

---

### Manage Tasks

#### Create a Task
Send a `POST` request to `/api/tasks` with the following fields in the request body:
- `title`
- `description`

**Note**: Authentication is required.

#### View All Tasks
Send a `GET` request to `/api/tasks`.

**Note**: Authentication is required.

#### Update a Task
Send a `PUT` request to `/api/tasks/:id` with any of the following optional fields in the request body:
- `title`
- `description`
- `isCompleted`

**Note**: Replace `:id` with the task's ID. Authentication is required.

#### Delete a Task
Send a `DELETE` request to `/api/tasks/:id`.

**Note**: Replace `:id` with the task's ID. Authentication is required.

