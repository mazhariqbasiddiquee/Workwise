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



POST /api/seller/add
Description: Creates a new seller product in the database.

Authentication: Requires seller authentication.

Request Body:

JSON
{
  "name": "string", (required)
  "category": "string", (required)
  "description": "string", (required)
  "price": number, (required)
  "discount": number, (required)
}
Use code with caution.

Example Request:

HTTP
POST https://workwise-8u7l.onrender.com/seller/add
Request Body:
{
  "name": "Product C",
  "category": "Electronics",
  "description": "Description of Product C",
  "price": 700,
  "discount": 15
}
Use code with caution.

Response:

JSON
{
  "msg": "product created"
}
Use code with caution.

PATCH /api/seller/update/:id
Description: Updates an existing seller product in the database.

Authentication: Requires seller authentication.

Path Parameters:

:id (number) - The ID of the product to update.
Request Body:

JSON
{
  "name": "string", (optional)
  "category": "string", (optional)
  "description": "string", (optional)
  "price": number, (optional)
  "discount": number, (optional)
}

**Example Request**:

```http
PATCH [invalid URL removed]
Request Body:
{
  "price": 550,
  "discount": 12
}
Use code with caution.

Response:

If the product is updated successfully:
JSON
{
  "msg": "product updated"
}
Use code with caution.

If the product is not found:
JSON
{
  "msg": "product not found"
}
Use code with caution.

DELETE /api/seller/delete/:id
Description: Deletes an existing seller product from the database.

Authentication: Requires seller authentication.

Path Parameters:

:id (number) - The ID of the product to delete.
Response:

If the product is deleted successfully:
JSON
{
  "msg": "product deleted"
}
Use code with caution.

If the product is not found:
JSON
{
  "msg": "product not found"
}

