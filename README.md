# Compass Project

This is a project made as a trainee at Compass.
The project is composed of three web pages and an API.
It uses mainly React and NestJS both with Typescript.
To store data, the project will use SQLite.

## Description

The project has three web pages:
- Register
- Login
- Home

And a backend API.

### Register

The register page has an html form that asks for users information and verify if the information is valid. If not, the border of the wrong inputs will change its color and error messages will show below them. If its valid, a prompt will pop up saying that the registration was confirmed.

### Login

Very similar to the register page, the login page has an html form that will verify if the information given is valid. If not, it will have the same treatment as the register page. If its valid, a prompt will pop up confirming the login and the user will be redirected to the home page.

### Home

The home page will show the information of the user logged from the login page or show a default guest account if the user is not logged. The home page currently functionalities are:

- Load a friends list
- Load posts
- Make a post

### Backend

The project has a NestJS api with the following routes:
- localhost:3002/api/v1/users         (get/post)
- localhost:3002/api/v1/users/:id     (get/put/delete)
- localhost:3002/api/v1/users/login   (post)
- localhost:3002/api/v1/posts         (get/post)
- localhost:3002/api/v1/posts/:id     (get/put/delete)
- localhost:3002/api/v1/comments      (get/post)
- localhost:3002/api/v1/comments/:id  (get/delete)

## Installation

Node is a must.
To install the project, simply run "npm i" on the terminal inside the project folder "frontend" and "backend_api".

## Running

To run the project, you will need to run "npm start" on the terminal inside the "backend_api" folder. This will start the API on port 3002.
Next you need another terminal instance to run "npm start" inside the "frontend" folder. This will start react on port 3000.
Now you should be able to access:
- localhost:3000 (register page)
- localhost:3000/login
- localhost:3000/home
- all the backend routes
