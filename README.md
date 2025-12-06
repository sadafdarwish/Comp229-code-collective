# 🚀 Code Collective – COMP229 Final Project

A MERN-stack portfolio management app built for COMP229.
Includes authentication, project CRUD, protected routes, and full deployment.

🧑‍🤝‍🧑 Team Members & Roles
Member	Role	Responsibilities
Sadaf Darwish	Member 1 – Backend & Frontend Deployment	Final code setup, MongoDB Atlas connection, backend deployment (Render), frontend deployment (Netlify), JWT Auth, Login/Register, CRUD for Projects
Kadin Chawah	Member 2 – EDD v3 (External Design Document)	Wireframes, UI screens, color palette, team logo, navigation layout, authentication architecture
Maharaj Nath	Member 3 – Agile Management + Documentation	Trello/Jira final backlog, task board updates, sprint documentation, README updates, backlog PDF
🌍 Live Deployment Links
🔹 Frontend (Netlify)

👉 https://comp229-code-collective.netlify.app/

🔹 Backend (Render)

👉 https://comp229-code-collective.onrender.com/

🏗️ Tech Stack
Frontend

React + Vite

React Router

Axios

Tailwind / Custom CSS

Backend

Node.js / Express

MongoDB Atlas (NoSQL)

Mongoose

JWT Authentication

Bcrypt Password Hashing

Dev Tools

Postman API testing

Render (Backend hosting)

Netlify (Frontend hosting)

GitHub collaboration

Trello/Jira project management

🔐 Main Features (Completed in Part 1)
Authentication

✔ Register
✔ Login
✔ JWT-based authentication
✔ Protected routes
✔ Password hashing

Projects CRUD

✔ Create Project
✔ Read Project
✔ Update Project
✔ Delete Project

Frontend Functionality

✔ Fully working UI
✔ Links to Login/Register
✔ Projects dashboard
✔ Error-free navigation

Backend Functionality

✔ MongoDB Atlas connected
✔ API routes protected
✔ Deployed + Active Health Check
✔ /api/projects fully functional

⚙️ How to Run the Project Locally
➡️ 1. Clone the repository
git clone https://github.com/sadafdarwish/Comp229-code-collective.git
cd Comp229-code-collective

➡️ 2. Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_atlas_link
JWT_SECRET=your_secret


Run backend:

npm run dev


Backend will start at:

http://localhost:5000

➡️ 3. Frontend Setup
cd client
npm install
npm run dev


Frontend runs at:

http://localhost:5173

📡 API Routes Summary
Auth
POST /api/auth/register
POST /api/auth/login

Users
GET /api/users/me

Projects
GET /api/projects
POST /api/projects
PUT /api/projects/:id
DELETE /api/projects/:id

📁 Project Folder Structure
Comp229-code-collective/
 ├── backend/
 │   ├── controllers/
 │   ├── middleware/
 │   ├── models/
 │   ├── routes/
 │   ├── server.js
 │   ├── config/db.js
 │   └── .env
 │
 ├── client/
 │   ├── src/
 │   ├── public/
 │   ├── vite.config.js
 │   └── package.json
 │
 └── README.md

🧪 Health Check Endpoint
GET /api/health


Response:

{
  "status": "ok",
  "message": "Backend is deployed and working"
}

✔️ Project Status

✅ Backend completed & deployed
✅ Frontend completed & deployed
✅ Part 1 delivered (Sadaf Darwish)
🔜 Part 2 & 3 to be completed by Kadin & Maharaj
