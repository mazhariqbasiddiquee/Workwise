# Workwise

The base URL for all endpoints is https://workwise-8u7l.onrender.com

## Routes

### GET /api/users

- **Description**: Retrieves all users from the database.
- **Response**: Returns a JSON array of user objects.
- **Example**:
  ```http
  GET https://workwise-8u7l.onrender.com/user
  Response:
  {
    "msg": [
      { "id": 1, "name": "John Doe", "email": "john@example.com", "role": "buyer" },
      { "id": 2, "name": "Jane Smith", "email": "jane@example.com", "role": "seller" }
    ]
  }




### POST /api/users/signup

- **Description**: Creates a new user.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "buyer"
  }
