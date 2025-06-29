
---

#  Farmers Marketplace - Backend (Sprint 1)

A Node.js + Express backend module for the **Farmers Marketplace** project. This module implements **user registration, login, profile viewing and updating** via JWT authentication.

---

##  Tech Stack

* **Backend Framework**: Express.js
* **Database**: MySQL
* **Authentication**: JWT
* **Hashing**: bcrypt
* **Environment Config**: dotenv

---

##  Installation

```bash
git clone https://github.com/ZLADIMIY/cake-user-backend.git
cd farmers-marketplace-backend
npm install
```

---

##  Configuration

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=cake_marketplace
PORT=5000
JWT_SECRET=your_secret_key
```

Ensure you have created the MySQL database and `users` table (see `docs/schema.sql` or below).

---

##  Running the Server

```bash
node server.js
```

Server should start on:

```
http://localhost:5000
```

---

##  Auth API Endpoints

| Method | Endpoint             | Description              | Auth Required |
| ------ | -------------------- | ------------------------ | ------------- |
| POST   | `/api/auth/register` | Register new user        | No            |
| POST   | `/api/auth/login`    | Login and get JWT        | No            |
| GET    | `/api/auth/profile`  | Get current user profile | Yes         |
| PUT    | `/api/auth/profile`  | Update user profile      | Yes         |

See full API documentation in `docs/api.md`.

---

## Testing

Use Thunder Client / Postman with your JWT token:

```http
Authorization: Bearer <your_token>
```

---

##  SQL Schema

```sql
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  address VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

##  Project Structure

```
.
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── routes/
│   └── auth.js
├── server.js
└── .env
```



---

##  Notes

* Ensure MySQL server is running before starting backend.
* Frontend must attach JWT token for protected routes.

---
