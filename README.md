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




### POST https://workwise-8u7l.onrender.com/user/signup

- **Description**: Creates a new user.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "buyer"
  }

   Response:
  {
   {
  "msg": "User created"
    }

  }







### POST https://workwise-8u7l.onrender.com/user/login

- **Description**: Authenticates user credentials and generates JWT token.
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }

{
  "msg": "login Successful",
  "token": "<JWT token>"
}





