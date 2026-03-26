# 🚀 MERN Auth System (Frontend + Backend)

## 📌 Project Overview

This project is a **Full Stack Authentication System** built using **MERN Stack (MongoDB-ready, Express, React, Node.js)**.

It includes:

* User Registration
* User Login
* JWT Authentication (Access + Refresh Token)
* Form validation
* Cookie-based session handling

---

## 🏗️ Tech Stack

### 🔹 Backend

* Node.js
* Express.js
* JWT (jsonwebtoken)
* bcryptjs (password hashing)
* Joi (validation)
* Cookie-parser
* CORS

### 🔹 Frontend

* React.js (Vite)
* React Hook Form
* Axios (for API calls)

---

## 📂 Project Structure

### Backend

```
backend/
 ├── src/
 │   ├── controllers/
 │   │    └── auth.controller.js
 │   ├── routes/
 │   │    └── auth.routes.js
 │   ├── middleware/
 │   │    └── error.middleware.js
 │   ├── utils/
 │   │    └── token.js
 │   ├── validations/
 │   │    └── auth.validation.js
 │   └── app.js
 ├── server.js
 └── package.json
```

### Frontend

```
frontend/react-form-task/
 ├── src/
 ├── index.html
 ├── vite.config.js
 └── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone <your-repo-url>
cd project-folder
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```
cd frontend/react-form-task
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User registers → password hashed using bcrypt
2. JWT Access + Refresh token generated
3. Refresh token stored in **HTTP-only cookie**
4. Access token sent in response
5. Login validates credentials and re-issues tokens

---

## 📡 API Endpoints

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## 🧠 Key Features

* 🔒 Secure password hashing
* 🍪 HTTP-only cookie authentication
* 🔄 Access & Refresh token system
* ⚡ Clean error handling middleware
* 📦 Modular folder structure
* ✅ Joi validation for request data

---

## ⚠️ Current Limitations

* Users stored in memory (no database)
* No logout endpoint
* No refresh token rotation

---

## 🚀 Future Improvements

* Integrate MongoDB
* Add role-based authentication
* Add logout & token blacklist
* Implement refresh token rotation
* Add protected routes

---

## 👨‍💻 Author

**Prathamesh Wankhede**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
