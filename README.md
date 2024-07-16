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



# Seller API

The base URL for all endpoints related to sellers is https://workwise-8u7l.onrender.com/seller.

## Routes

### GET https://workwise-8u7l.onrender.com/seller

- **Description**: Retrieves all seller products from the database.
- **Authentication**: Requires seller authentication.
- **Response**: Returns a JSON array of seller product objects.
- **Example**:
  ```http
  GET https://workwise-8u7l.onrender.com/seller
  Response:
  {
    "msg": [
      {
        "id": 1,
        "name": "Product A",
        "category": "Electronics",
        "description": "Description of Product A",
        "price": 500,
        "discount": 10
      },
      {
        "id": 2,
        "name": "Product B",
        "category": "Clothing",
        "description": "Description of Product B",
        "price": 200,
        "discount": 5
      }
    ]
  }




  ### POST https://workwise-8u7l.onrender.com/seller/add

- **Description**: create product in database.
- **Authentication**: Requires seller authentication.

- **Example**:
  ```http
  POST  https://workwise-8u7l.onrender.com/seller/add
  Request Body:
  {
  "name": "Product Name",
  "category": "Product Category",
  "description": "Description of the product",
  "price": 100,
  "discount": 10
  }
  Response:
  {
  "msg": "product created"
  }






