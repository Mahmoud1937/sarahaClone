# 🗣️ Saraha Clone

A **Saraha Clone** backend application built with **Node.js** and **Express.js**.  
It provides a secure authentication system, anonymous messaging, and email verification.  
Users can register, send and receive anonymous messages, and manage their accounts safely with encryption and token-based authentication.

---

## 🚀 Features

- 🔐 **Complete Authentication System** (Register, Login)
- ♻️ **Refresh Token System** for extended user sessions
- 📩 **Email Verification** (Account activation & password reset)
- 🔒 **Password Encryption & Hashing** with **bcrypt** and **crypto-js**
- 🔑 **JWT Authentication** (Access & Refresh Tokens)
- 🔄 **Forgot Password, Change Password, Deactivate Account**
- 💬 **Anonymous Messaging System**
- ✅ **Request Validation** using **Joi**
- 🧩 **Modular MVC Architecture**

---

## 🛠️ Technologies Used

| Technology | Description |
|-------------|-------------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Fast and minimal web framework |
| **MongoDB + Mongoose** | NoSQL database and ODM |
| **Nodemailer** | Email service for activation and reset links |
| **bcrypt** | Hashing user passwords securely |
| **crypto-js** | Data encryption and decryption |
| **jsonwebtoken (JWT)** | Access & refresh token management |
| **Joi** | Schema-based request validation |
| **CORS** | Cross-Origin Resource Sharing |
| **Nodemon** | Development auto-restart utility |

---


## 📁 Project Structure

src/
│
├── DB/
│   ├── Models/
│   │   ├── user.model.js
│   │   └── message.model.js
│   └── connection.js
│
├── Middleware/
│   ├── authentication.middleware.js
│   ├── authorization.middleware.js
│   └── validation.middleware.js
│
├── Modules/
│   ├── Auth/
│   │   ├── auth.controller.js
│   │   ├── auth.validation.js
│   │   └── services/
│   │       └── auth.service.js
│   │
│   ├── Messages/
│   │   ├── message.controller.js
│   │   ├── message.service.js
│   │   └── message.validation.js
│   │
│   ├── Profile/
│   │   ├── profile.controller.js
│   │   ├── profile.service.js
│   │   └── profile.validation.js
│   │
│   └── main.js
│
└── utils/
    ├── Emails/
    ├── Encryption/
    ├── ErrorHandler/
    └── Hashing/

│ └── Hashing/
