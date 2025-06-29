
---

###  `docs/API_DOC.md`

```md
#  Farmers Marketplace Backend API Documentation

This document outlines the user-related API endpoints for the Farmers Marketplace backend service. All endpoints return JSON responses.

---

##  Base URL
[http://localhost:5000/api/auth](http://localhost:5000/api/auth)

```


---

##  Authentication Overview

- This system uses **JWT (JSON Web Tokens)** for authentication.
- After logging in, clients will receive a `token`.
- For all protected routes, include the following header:

```

Authorization: Bearer \<your\_token>

````

---

##  API Endpoints

---

###  1. Register New User

- **Method**: `POST`
- **URL**: `/register`
- **Auth**:  Not required

#### Request Body:

```json
{
  "username": "alice",
  "email": "alice@example.com",
  "password": "123456"
}
````

#### Success Response:

```json
{
  "message": "User registered successfully"
}
```

#### Failure Responses:

* `400` if required fields missing
* `500` if email already exists or DB error

---

###  2. Login

* **Method**: `POST`
* **URL**: `/login`
* **Auth**:  Not required

#### Request Body:

```json
{
  "username": "alice",
  "password": "123456"
}
```

#### Success Response:

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

#### Failure Responses:

* `404` if user not found
* `401` if password incorrect

---

###  3. Get Profile

* **Method**: `GET`
* **URL**: `/profile`
* **Auth**:  Required (JWT)

#### Headers:

```
Authorization: Bearer <your_token>
```

#### Success Response:

```json
{
  "id": 1,
  "username": "alice",
  "email": "alice@example.com",
  "phone": "12345678",
  "address": "UNSW Campus"
}
```

#### Failure Responses:

* `401` if token missing
* `403` if token invalid or expired

---

###  4. Update Profile

* **Method**: `PUT`
* **URL**: `/profile`
* **Auth**:  Required (JWT)

#### Headers:

```
Authorization: Bearer <your_token>
Content-Type: application/json
```

#### Request Body:

```json
{
  "phone": "9876543210",
  "address": "New Street, Sydney"
}
```

#### Success Response:

```json
{
  "message": "Profile updated successfully"
}
```

#### Failure Responses:

* `400` if required fields missing
* `500` if DB update fails

---

##  Sample MySQL User Table

```sql
CREATE TABLE users (
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

##  Status Codes Summary

| Status Code | Meaning                   |
| ----------- | ------------------------- |
| `200`       | Success                   |
| `201`       | Resource created          |
| `400`       | Bad request               |
| `401`       | Unauthorized              |
| `403`       | Forbidden (invalid token) |
| `404`       | Not found                 |
| `500`       | Internal server error     |

---

##  Maintainers

* Backend Lead: **Ye Zhou**
* Frontend Partner: **Yiwei Wu**

---

