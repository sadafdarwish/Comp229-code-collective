🧑‍💻 COMP229 – Code Collective
Final Release – Part 1, Part 2 & Part 3
📌 Project Overview

Code Collective is a MERN-based project management application designed for COMP229.
The app allows users to:

Register and log in

Authenticate using JWT

Create, Read, Update, and Delete (CRUD) projects

Access protected routes

Use a modern UI built with React + Vite

Store all data securely in MongoDB Atlas

This repository contains the final deployed full-stack version of the application.

🚀 Live Deployment Links
🔹 Frontend (Netlify)

👉 https://comp229-code-collective.netlify.app/

🔹 Backend (Render)

👉 https://comp229-code-collective.onrender.com/

🔹 Backend Health Check

👉 https://comp229-code-collective.onrender.com/api/health

👥 Team Members
Member	Role	Responsibility
Sadaf Darwish	Part 1	Final backend + frontend code, MongoDB Atlas integration, Render + Netlify deployment, full app functionality
Kadin Chawah	Part 2	External Design Document (EDD v3): wireframes, UI screenshots, color palette, navigation layout, authentication strategy
Maharaj Nath	Part 3	Agile Project Management: Trello/Jira boards, backlog PDF, README documentation additions
🧩 Tech Stack
Frontend

React (Vite)

React Router

CSS

Backend

Node.js

Express

JWT Authentication

Bcrypt

MongoDB Atlas

Mongoose

Deployment

Netlify (Frontend)

Render (Backend)

Postman API Testing

📁 Project Structure
comp229-code-collective/
│
├── client/                 # Frontend (React + Vite)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── App.jsx
│
├── config/
│   └── db.js               # MongoDB connection
│
├── controllers/            # Route controllers
├── middleware/             # Auth middleware (JWT)
├── models/                 # Mongoose models
├── routes/                 # Express routes
│
├── server.js               # Main backend entry file
├── .env                    # Environment variables (not included)
└── README.md               # Documentation

🛠 How to Run Locally
Backend
cd backend
npm install
npm start

Frontend
cd client
npm install
npm run dev

📦 Environment Variables

Create a .env file in the backend:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key

🧪 API Testing (Postman Collection)

Located in the root folder:

My Collection.postman_collection.json

🎯 Project Status

✔ Backend deployed
✔ Frontend deployed
✔ JWT authentication working
✔ CRUD for projects fully functional
✔ Protected routes working
✔ MongoDB Atlas connected
✔ Ready for EDD / Agile documentation
