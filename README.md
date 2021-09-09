# Build Week Scaffolding for Node and PostgreSQL

## Video Tutorial

The following tutorial explains how to set up this project using PostgreSQL and Heroku.

[![Setting up PostgreSQL for Build Week](https://img.youtube.com/vi/kTO_tf4L23I/maxresdefault.jpg)](https://www.youtube.com/watch?v=kTO_tf4L23I)

## Requirements

- [PostgreSQL, pgAdmin 4](https://www.postgresql.org/download/) and [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed in your local machine.
- A Heroku app with the [Heroku PostgreSQL Addon](https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres) added to it.
- Development and testing databases created with [pgAdmin 4](https://www.pgadmin.org/docs/pgadmin4/4.29/database_dialog.html).

## Starting a New Project

- Create a new repository using this template, and clone it to your local.
- Create a `.env` file and follow the instructions inside `knexfile.js`.
- Fix the scripts inside `package.json` to use your Heroku app.

## Scripts

- **start**: Runs the app in production.
- **server**: Runs the app in development.
- **migrate**: Migrates the local development database to the latest.
- **rollback**: Rolls back migrations in the local development database.
- **seed**: Truncates all tables in the local development database, feel free to add more seed files.
- **test**: Runs tests.
- **deploy**: Deploys the main branch to Heroku.

**The following scripts NEED TO BE EDITED before using: replace `YOUR_HEROKU_APP_NAME`**

- **migrateh**: Migrates the Heroku database to the latest.
- **rollbackh**: Rolls back migrations in the Heroku database.
- **databaseh**: Interact with the Heroku database from the command line using psql.
- **seedh**: Runs all seeds in the Heroku database.

## Hot Tips

- Figure out the connection to the database and deployment before writing any code.

- If you need to make changes to a migration file that has already been released to Heroku, follow this sequence:

  1. Roll back migrations in the Heroku database
  2. Deploy the latest code to Heroku
  3. Migrate the Heroku database to the latest

- If your frontend devs are clear on the shape of the data they need, you can quickly build provisional endpoints that return mock data. They shouldn't have to wait for you to build the entire backend.

- Keep your endpoints super lean: the bulk of the code belongs inside models and other middlewares.

- Validating and sanitizing client data using a library is much less work than doing it manually.

- Revealing crash messages to clients is a security risk, but during development it's helpful if your frontend devs are able to tell you what crashed.

- PostgreSQL comes with [fantastic built-in functions](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql) for hammering rows into whatever JSON shape.

- If you want to edit a migration that has already been released but don't want to lose all the data, make a new migration instead. This is a more realistic flow for production apps: prod databases are never migrated down. We can migrate Heroku down freely only because there's no valuable data from customers in it. In this sense, Heroku is acting more like a staging environment than production.

- If your fronted devs are interested in running the API locally, help them set up PostgreSQL & pgAdmin in their machines, and teach them how to run migrations in their local. This empowers them to (1) help you troubleshoot bugs, (2) obtain the latest code by simply doing `git pull` and (3) work with their own data, without it being wiped every time you roll back the Heroku db. Collaboration is more fun and direct, and you don't need to deploy as often.


# POTLUCK BACKEND

# https://web44backend.herokuapp.com/


### ----------------  ENDPOINTS  -------------------- 

### **-----LOGIN and REGISTER-----**

### [POST] /api/auth/register  -- creates a new user

<details>
    <summary>WHAT TO SEND </summary>

```JSON
{
    "username": "string",
    "password": "string"
}
```
</details>

<details>
    <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "username": "string",
    "user_id": "integer"
}
```
</details>


### [POST] /api/auth/login  -- logs in an existing user
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "username": "string",
    "password": "string"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "message": "Welcome back username",
    "user_id": "integer",
    "username": "username",
    "token": "TOKEN"
}
```
</details>

## **-----USERS-----**

### [GET] /api/users  -- gets list of users

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
[
    {
        "user_id": 1,
        "username": "RZA"
    },
    {
        "user_id": 2,
        "username": "GZA"
    },
    {
        "user_id": 3,
        "username": "ODB"
    }
]
```
</details>

### [GET] /api/users/:id  -- gets user by ID

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "user_id": 1,
    "username": "RZA"
}
```
</details>

### [GET] /api/users/:id/potlucks  -- gets all the potlucks a user has been invited to 

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "user_id": "8",
    "username": "U-God",
    "potlucks": [
        {
            "attending": 1,
            "potluck_id": 3,
            "potluck_name": "MM..FOOD",
            "organizer": "Ghostface Killah",
            "potluck_description": "got more cheese than doritos, cheetos, or fritos",
            "potluck_date": "2021-07-28T06:00:00.000Z",
            "potluck_time": "07:30:00",
            "potluck_location": "45 S 5th Ave, New York NY"
        },
        {
            "attending": 1,
            "potluck_id": 2,
            "potluck_name": "Yum Yum Food Time",
            "organizer": "GZA",
            "potluck_description": "yumyumyumyumyumyumyum",
            "potluck_date": "2021-08-20T06:00:00.000Z",
            "potluck_time": "05:00:00",
            "potluck_location": "1111 E 2222 S, SLC UT"
        }
    ]
}
```
</details>

### [GET] /api/users/:organizer_id/organizer_potlucks  -- gets all the potlucks a user has created

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
[
    {
        "potluck_id": 1,
        "potluck_name": "Tasty Foodz Partay",
        "organizer": 3,
        "details": {
            "potluck_description": "bring the tastiest food pls.  NO BAD FOOD",
            "potluck_date": "2021-07-15T06:00:00.000Z",
            "potluck_time": "06:00:00",
            "potluck_location": "1403 Park Ave, Long Beach CA"
        }
    },
    {
        "potluck_id": 5,
        "potluck_name": "36 chambers",
        "organizer": 3,
        "details": {
            "potluck_description": "Wu Tang Clan aint nuthin to BRUNCH with",
            "potluck_date": "2021-07-28T06:00:00.000Z",
            "potluck_time": "12:00:00",
            "potluck_location": "straight from the Shaolin slums"
        }
    }
]
```
</details>


### [PUT] /api/users/:id  -- edit existing user
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "username": "string",
    "password": "string"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "user_id": 1,
    "username": "RZA"
}
```
</details>

## **-----POTLUCKS-----**

### [GET] /api/potlucks  -- get an array of potlucks

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
[
    {
        "potluck_id": 1,
        "potluck_name": "Tasty Foodz Partay",
        "organizer": 3,
        "potluck_description": "bring the tastiest food pls.  NO BAD FOOD",
        "potluck_date": "2021-07-15T06:00:00.000Z",
        "potluck_time": "06:00:00",
        "potluck_location": "1403 Park Ave, Long Beach CA"
    },
    {
        "potluck_id": 2,
        "potluck_name": "Yum Yum Food Time",
        "organizer": 1,
        "potluck_description": "yumyumyumyumyumyumyum",
        "potluck_date": "2021-08-20T06:00:00.000Z",
        "potluck_time": "05:00:00",
        "potluck_location": "1111 E 2222 S, SLC UT"
    },
    {
        "potluck_id": 3,
        "potluck_name": "MM..FOOD",
        "organizer": 5,
        "potluck_description": "got more cheese than doritos, cheetos, or fritos",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
]
```
</details>

### [GET] /api/potlucks/:id  -- gets potluck by ID

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "MM..FOOD",
    "details": {
        "organizer": "Raekwon",
        "potluck_description": "got more cheese than doritos, cheetos, or fritos",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
}
```
</details>

### [GET] /api/potlucks/:id/users  -- gets the users for a specific potluck 

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "potluck_id": 2,
    "potluck_name": "Yum Yum Food Time",
    "details": {
        "organizer": 1,
        "potluck_description": "yumyumyumyumyumyumyum",
        "potluck_date": "2021-08-20T06:00:00.000Z",
        "potluck_time": "05:00:00",
        "potluck_location": "1111 E 2222 S, SLC UT"
    },
    "users": [
        {
            "user_id": 4,
            "username": "Method Man",
            "attending": "attending"
        },
        {
            "user_id": 3,
            "username": "ODB",
            "attending": "not attending"
        }
    ]
}
```
</details>

### [GET] /api/potlucks/:id/foods  -- gets the foods for a specific potluck 

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "potluck_id": 3,
    "foods": [
        {
            "food_id": 1,
            "food_name": "Pineapple",
            "food_description": "part pine, part apple"
        },
        {
            "food_id": 2,
            "food_name": "Sweet Potatoes",
            "food_description": "mashed?  fried?  u choose"
        },
        {
            "food_id": 6,
            "food_name": "Ramen",
            "food_description": ""
        }
    ]
}
```
</details>












### [POST] /api/potlucks/:id/users  -- adds a user to a potluck
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
   "potluck_id": 2,
   "user_id": 8,
   "attending": 1 //0 for not attending, 1 for attending
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 2,
    "potluck_name": "Yum Yum Food Time",
    "details": {
        "organizer": 1,
        "potluck_description": "yumyumyumyumyumyumyum",
        "potluck_date": "2021-08-20T06:00:00.000Z",
        "potluck_time": "05:00:00",
        "potluck_location": "1111 E 2222 S, SLC UT"
    },
    "users": [
        {
            "user_id": 4,
            "username": "Method Man",
            "attending": "attending"
        },
        {
            "user_id": 3,
            "username": "ODB",
            "attending": "not attending"
        },
        {
            "user_id": 8,
            "username": "U-God",
            "attending": "attending"
        }
    ]
}
```
</details>

### [POST] /api/potlucks/:id/foods  -- adds a food item to a potluck
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "potluck_id": 3,
    "food_name":"string, is required",
    "food_description":"string",
    "food_id": 2
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 3,
    "foods": [
        {
            "food_id": 1,
            "food_name": "Pineapple",
            "food_description": "part pine, part apple",
            "potluck_food_id": 4
        },
        {
            "food_id": 2,
            "food_name": "Sweet Potatoes",
            "food_description": "mashed?  fried?  u choose",
            "potluck_food_id": 18
        },
        {
            "food_id": 5,
            "food_name": "Masala",
            "food_description": "better make me sweat",
            "potluck_food_id": 20
        }
    ]
}
```
</details>


### [POST] /api/potlucks  -- creates a new potluck
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "potluck_name": "string",
    "potluck_description": "optional string",
    "potluck_date": "2021-07-28  must be this format",
    "potluck_time": "12:00:00 must be this format",
    "potluck_location": "string",
    "organizer": "integer"

}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "MM..FOOD",
    "details": {
        "organizer": "Raekwon",
        "potluck_description": "got more cheese than doritos, cheetos, or fritos",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
}
```
</details>

### [PUT] /api/potlucks/:id  -- updates an existing potluck
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "potluck_name": "string",
    "potluck_description": "optional string",
    "potluck_date": "2021-07-28  must be this format",
    "potluck_time": "12:00:00 must be this format",
    "potluck_location": "string",
    "organizer": "integer"

}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "MM..FOOD",
    "details": {
        "organizer": "Raekwon",
        "potluck_description": "got more cheese than doritos, cheetos, or fritos",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
}
```
</details>




### [DELETE] /api/potlucks/:id  -- delete existing potluck

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "MM..FOOD",
    "details": {
        "organizer": "Raekwon",
        "potluck_description": "got more cheese than doritos, cheetos, or fritos",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
}
```
</details>

### [DELETE] /api/potlucks/:potluck_food_id/foods  -- delete existing food item in a potluck

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
"successfully removed item"
```
</details>

## **-----FOODS-----**

### [GET] /api/foods  -- get an array of all foods

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
[
    {
        "food_id": 1,
        "food_name": "Pineapple",
        "food_description": "part pine, part apple"
    },
    {
        "food_id": 2,
        "food_name": "Sweet Potatoes",
        "food_description": "mashed?  fried?  u choose"
    },
    {
        "food_id": 3,
        "food_name": "Pizza",
        "food_description": "Veeeeegan pls"
    }
]
```
</details>

### [GET] /api/foods/:id  -- gets food by ID

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "food_id": 1,
    "food_name": "Pineapple",
    "food_description": "part pine, part apple"
}
```
</details>

### [POST] /api/foods  -- create new food item

<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "food_name": "Quesadilla",
    "food_description": " optional string"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "food_id": 8,
    "food_name": "Quesadilla",
    "food_description": "no description yet"
}
```
</details>

### [PUT] /api/foods/:id  -- update existing food item

<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "food_name": "Fajitas",
    "food_description": " optional string"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "food_id": 8,
    "food_name": "Fajitas",
    "food_description": "no description yet"
}
```
</details>

### [DELETE] /api/foods/:id  -- delete existing food item

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "food_id": 8,
    "food_name": "Masala",
    "food_description": "no description yet"
}
```
</details>