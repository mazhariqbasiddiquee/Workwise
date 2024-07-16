# Workwise

The base URL for all endpoints is https://workwise-8u7l.onrender.com

#Routes
#GET /api/users
Description: Retrieves all users from the database.
Response: Returns a JSON array of user objects.
Example:
http
Copy code
GET https://workwise-8u7l.onrender.com/user
Response:
{
  "msg": [
    { "id": 1, "name": "John Doe", "email": "john@example.com", "role": "buyer" },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com", "role": "seller" }
  ]
}
POST /api/users/signup
Description: Creates a new user.
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "buyer"
}
Response: Returns a success message if user is created successfully.
Example:
http
Copy code
POST  https://workwise-8u7l.onrender.com/user/signup
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "buyer"
}
Response:
{
  "msg": "User created"
}
POST https://workwise-8u7l.onrender.com/user/login
Description: Authenticates user credentials and generates JWT token.
Request Body:
json
Copy code
{
  "email": "john@example.com",
  "password": "password123"
}
Response: Returns a JWT token if login is successful.
Example:
http
Copy code
POST https://workwise-8u7l.onrender.com/user/login
Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}
Response:
{
  "msg": "login Successful",
  "token": "<JWT token>"
}
Roles
Buyer: Default role upon signup. Can perform basic operations.
Seller: Can perform advanced operations related to sales and product management.

Errors are handled using middleware to provide appropriate error responses.
