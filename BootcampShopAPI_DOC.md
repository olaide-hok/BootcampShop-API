# BootcampShop API

Backend API for the BootcampShop application to manage bootcamps, courses, reviews, users and authetication.

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->

## Endpoints

-   [Bootcamps](#bootcamps)
    1. [Get All Bootcamps](#1-get-all-bootcamps)
    1. [Get Single Bootcamp](#2-get-single-bootcamp)
    1. [Create New Bootcamp](#3-create-new-bootcamp)
    1. [Update Bootcamp](#4-update-bootcamp)
    1. [Delete Bootcamp](#5-delete-bootcamp)
    1. [Get Bootcamps In Radius](#6-get-bootcamps-in-radius)
    1. [Get Bootcamps By Distance](#7-get-bootcamps-by-distance)
    1. [Upload Photo](#8-upload-photo)
-   [Courses](#courses)
    1. [Get All Courses](#1-get-all-courses)
    1. [Get Courses for Bootcamp](#2-get-courses-for-bootcamp)
    1. [Get Single Course](#3-get-single-course)
    1. [Create Bootcamp Course](#4-create-bootcamp-course)
    1. [Update Course](#5-update-course)
    1. [Delete Course](#6-delete-course)
-   [Authentication](#authentication)
    1. [Register User](#1-register-user)
    1. [Login User](#2-login-user)
    1. [Get Logged in User](#3-get-logged-in-user)
    1. [Forgot Password](#4-forgot-password)
    1. [Reset Password](#5-reset-password)
    1. [Update User Details](#6-update-user-details)
    1. [Update Password](#7-update-password)
    1. [Logout User](#8-logout-user)
-   [Users](#users)
    1. [Get All Users](#1-get-all-users)
    1. [Get Single Users](#2-get-single-users)
    1. [Create user](#3-create-user)
    1. [Update User](#4-update-user)
    1. [Delete User](#5-delete-user)
-   [Reviews](#reviews)
    1. [Get All Reviews](#1-get-all-reviews)
    1. [Get Reviews For Bootcamp](#2-get-reviews-for-bootcamp)
    1. [Get Single Review](#3-get-single-review)
    1. [Add Review For Bootcamp](#4-add-review-for-bootcamp)
    1. [Update Review](#5-update-review)
    1. [Delete Review](#6-delete-review)

---

## Bootcamps

Bootcamps CRUD functionality

### 1. Get All Bootcamps

Fetch all bootcamps from database. Includes pagination, filtering, etc.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

### 2. Get Single Bootcamp

Get single botcamp by ID.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/65ce493b9b7f8c683a9fdda0
```

### 3. Create New Bootcamp

Add new bootcamp to database. Must be authenticated and must be a publisher/admin.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
   "name": "ModernTech Bootcamp Test",
		"description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
		"website": "https://moderntech.com",
		"phone": "(222) 222-2222",
		"email": "enroll@moderntech.com",
		"address": "220 Pawtucket St, Lowell, MA 01854",
		"careers": ["Web Development", "UI/UX", "Mobile Development"],
		"housing": false,
		"jobAssistance": true,
		"jobGuarantee": false,
		"acceptGi": true
}
```

### 4. Update Bootcamp

Update a single bootcamp in the database.

**_Endpoint:_**

```bash
Method: PUT
Type:
URL: {{URL}}/api/v1/bootcamps/8
```

### 5. Delete Bootcamp

Delete bootcamp from database.

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{URL}}/api/v1/bootcamps/
```

### 6. Get Bootcamps In Radius

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/radius/02118/10
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

### 7. Get Bootcamps By Distance

Get bootcamps within a radius of a specific zipcode

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/radius/02118/10
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

### 8. Upload Photo

Route to upload a bootcamp photo.

**_Endpoint:_**

```bash
Method: PUT
Type:
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/photo
```

## Courses

CRUD methods for Courses

### 1. Get All Courses

Gets all Courses in the database

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/courses
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

### 2. Get Courses for Bootcamp

Get specific course for a Bootcamp

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/5d725a4a7b292f5f8ceff789/courses
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

### 3. Get Single Course

Get single course by it's ID

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

### 4. Create Bootcamp Course

Add a new course for a soecific bootcamp to the database.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a037b292f5f8ceff787/courses
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "title": "Data Science Program",
    "description": "In this course you will learn Python for data science, machine learning and big data tools",
    "weeks": 10,
    "tuition": 12000,
    "minimumSkill": "intermediate",
    "scholarhipsAvailable": false
}
```

### 5. Update Course

Update course in Database.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/5d725cb9c4ded7bcb480eaa1
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "tuition": 130000,
    "minimumSkill": "advanced"
}
```

### 6. Delete Course

Remove course from database.

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/courses/5d725cb9c4ded7bcb480eaa1
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

## Authentication

Routes for user authentication including register, login, reset password etc.

### 1. Register User

Add user to the database with encrypted password.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "name": "Alan Poe",
    "email": "alanpoe@example.com",
    "password": "1234567",
    "role": "publisher"
}
```

### 2. Login User

Login user

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{

    "email": "kevin@gmail.com",
    "password": "1234567"

}
```

### 3. Get Logged in User

Get Logged in user via token

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
   "name": "ModernTech Bootcamp Testing",
		"description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
		"website": "https://moderntech.com",
		"phone": "(222) 222-2222",
		"email": "enroll@moderntech.com",
		"address": "220 Pawtucket St, Lowell, MA 01854",
		"careers": ["Web Development", "UI/UX", "Mobile Development"],
		"housing": false,
		"jobAssistance": true,
		"jobGuarantee": false,
		"acceptGi": true
}
```

### 4. Forgot Password

Generate password token and send email

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
   "email": "kevin@gmail.com"
}
```

### 5. Reset Password

Reset user password using token.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/4b3bae76d36adf3a0c7c4b783bc8af095dd4ceb8
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "password": "1234567"
}
```

### 6. Update User Details

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "name": "Kevin Spade",
    "email": "kevin@gmail.com"
}
```

### 7. Update Password

Update Logged In user password. Send in the body the currentPassword and newPassword.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "currentPassword": "1234567",
    "newPassword": "123456"
}
```

### 8. Logout User

Clear token cookie

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/auth/logout
```

## Users

CRUD functionality for users with admin role assigned to them.

### 1. Get All Users

Get all users {admin}

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/users
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

### 2. Get Single Users

Get Single user by id {admin}

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

### 3. Create user

Add user to database (admin)

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "name": "Jack Sparrow",
    "email": "jacksparrow@gmail.com",
    "password": "123456"
}
```

### 4. Update User

Update user in the database (admin).

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/65d856d7988a0be96c479bce
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "name": "Captain Jack Sparrow",
    "email": "jacksparrow@gmail.com",
    "password": "123456"
}
```

### 5. Delete User

Delete user from database (admin).

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/users/65d856d7988a0be96c479bce
```

**_Body:_**

```js
{
    "name": "Captain Jack Sparrow",
    "email": "jacksparrow@gmail.com",
    "password": "123456"
}
```

## Reviews

Manage course reviews

### 1. Get All Reviews

Get all reviews from database and populate with bootcamp name and description.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/reviews
```

### 2. Get Reviews For Bootcamp

Fetch the reviews for a specific bootcamp.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```

### 3. Get Single Review

Fetch a review from database by id and populate Bootcamp name and description

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/reviews/5d725a1b7b292f5f8ceff788
```

### 4. Add Review For Bootcamp

Insert review for a specific bootcamp.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "title": "Nice bootcamp",
    "text": "I learned a lot of great stuff.",
    "rating": "8"
}
```

### 5. Update Review

Update review in database

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/reviews/65da49cade51c0efdf205923
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | jSON Type   |

**_Body:_**

```js
{
    "title": "Had fun."
}
```

### 6. Delete Review

Remove from database.

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/reviews/65da49cade51c0efdf205923
```

**_Body:_**

```js
{
    "title": "Had fun."
}
```

---

[Back to top](#bootcampshop-api)
