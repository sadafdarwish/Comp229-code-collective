# COMP229 – Code Collective (Final Release)

A full-stack MERN application built as the Final Release Project for COMP229.
The app allows users to register, log in, and manage personal project entries using secure JWT authentication.

## 🚀 Live Deployments
🔹 Frontend (Netlify)

👉 https://comp229-code-collective.netlify.app/

🔹 Backend (Render)

👉 https://comp229-code-collective.onrender.com/

🔹 GitHub Repository

👉 https://github.com/sadafdarwish/Comp229-code-collective

## 🧑‍💻 Team Members & Roles
Member	Student Role	Responsibilities
Sadaf Darwish	Part 1 – Backend + Frontend Deployment	Full backend setup, JWT Auth, CRUD, MongoDB Atlas, Render + Netlify deployment
Kadin Chawah	Part 2 – External Design Document (EDD v3 PDF)	Wireframes, UI design, color scheme, navigation, screenshots, authentication strategy
Maharaj Nath	Part 3 – Agile + GitHub Documentation	Trello/Jira backlog, sprint board updates, README additions, documentation
## 📦 Features Implemented (Part 1 Completed by Sadaf)
🔐 Authentication

Register / Login

Password hashing (bcrypt)

JWT token generation

Protected routes for logged-in users

📁 CRUD Operations

Users can:

Create a project

Read their project list

Update a project

Delete a project

🗄️ Database

MongoDB Atlas cloud database

Fully connected using Mongoose

🌐 Deployment

Frontend deployed to Netlify

Backend deployed to Render

CORS configured correctly

🧭 Routing

Auth routes → /api/auth

User routes → /api/users

Project CRUD routes → /api/projects

## 🛠️ Tech Stack
Frontend

React (Vite)

React Router

Fetch API / Axios

Vite

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT

Bcrypt

CORS

Tools

GitHub

Netlify (Frontend hosting)

Render (Backend hosting)

Postman (API testing)

## ⚙️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/sadafdarwish/Comp229-code-collective
cd Comp229-code-collective

### 2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm start

### 3️⃣ Frontend Setup
cd client
npm install
npm run dev


Open local app:

http://localhost:5173

## ✔️ Project Status

✅ Backend completed
✅ Frontend connected
✅ Full CRUD functional
✅ JWT auth functional
✅ Atlas connected
✅ Deployments online
🔥 Part 1 successfully completed by Sadaf

