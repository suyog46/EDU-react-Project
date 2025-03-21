# Skillify - LMS System

Skillify is a Learning Management System (LMS) designed to facilitate the management of courses, students, and instructors. This project uses **Node.js**, **Express.js**, **SQL** (MySQL), and **React.js** to create a fully functional platform for educational institutions.

## Folder Structure
EDU-react-Project/
│
├── Backend/ # Backend code (Node.js + Express + SQL)
│ ├── routes/ # API routes
│ │ ├── index.js # Main route file
│ │ ├── multer.js # File upload handling (if applicable)
│ │ ├── connection.js # Database connection setup
│ │ └── users.js # User-related routes
│ └── app.js # Main server setup
│
└── frontend/ # Frontend code (ReactJS)
├── src/ # Main React application code
├── public/ # Static files
├── components/ # Reusable UI components
├── pages/ # React pages (views)
├── App.js # Main App component
└── index.js # Entry point for React app



## Features

- **Student Management**: Register, login, and manage courses.
- **Course Management**: Instructors can create, update, and delete courses.
- **Student-Teacher Interaction**: Students can enroll in courses, track progress, and interact with instructors.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MySQL (SQL database)
  - Multer (for file uploads, if applicable)
  
- **Frontend**:
  - React.js
  - React Router
  - Axios (for making API requests)

## Installation

### Prerequisites

- Node.js and npm installed on your machine. If not, install from [here](https://nodejs.org/).
- MySQL database set up on your local machine or server.

### Setup

1. **Clone the repository**:

 git clone https://github.com/yourusername/eduwe.git


Backend setup:

Navigate to the Backend folder:


cd EDU-react-Project/Backend
Install dependencies:


npm install
Configure your database in connection.js (or wherever your database configuration is).

Run the server:

npm start
Frontend setup:

Navigate to the frontend folder:


cd EDU-react-Project/frontend
Install dependencies:


npm install
Run the React app:


npm start
The React application will typically run at http://localhost:3000.

Environment Variables
You might need to set up the following environment variables in a .env file in the root of the Backend directory:


DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=eduwe
PORT=5000
API Documentation
The backend provides several API endpoints for managing students, instructors, courses, etc. Some of the key endpoints include:

POST /api/auth/register: Register a new user (student or instructor).

POST /api/auth/login: Login for an existing user.

GET /api/courses: Get a list of all courses.

POST /api/courses: Create a new course (instructor only).

GET /api/courses/:id: Get details of a specific course.

Contributing
Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make changes and commit (git commit -am 'Add new feature').

Push to the branch (git push origin feature-branch).

Create a new pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

