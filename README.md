# Compass Project

This is a project made as a trainee at Compass.
The project is composed of three web pages and an API.
It uses mainly React and Typescript.

## Description

The project has three web pages:
- Register
- Login
- Home

And a backend API to read json files using express.

### Register

The register page has an html form that asks for users information and verify if the information is valid. If not, the border of the wrong inputs will change its color and error messages will show below them. If its valid, a prompt will pop up saying that the registration was confirmed.
Currently, the user registration will not be stored anywhere.

### Login

Very similar to the register page, the login page has an html form that will verify if the information given is valid. If not, it will have the same treatment as the register page. If its valid, a prompt will pop up confirming the login and the user will be redirected to the home page.
Currently, the validate accounts are stored in the users.json file.

### Home

The home page will show the information of the user logged from the login page or show a default guest account if the user is not logged. The home page currently functionalities are:

- Load a friends list (from the users.json)
- Load posts (from the posts.json)
- Make a post (that is not stored anywhere)

As there is, currently, no database, all the information comes com json files and from picsum.photos and nothing is stored.

### Backend

The project has a server.js file to read the "users" and "posts" json files and serve them to the frontend.

## Installation

Node is a must.
To install the project, simply run "npm i" on the terminal inside the project root folder "projeto-compasso".

## Running

To run the project, you will need to run "node server.js" on the terminal inside the "server" folder. This will start the API to read json files on port 3002.
Next you need another terminal instance to run "npm start" inside the project root folder "projeto-compasso". This will start react on port 3000.
Now you should be able to access:
- localhost:3000 (register page)
- localhost:3000/login
- localhost:3000/home
- localhost:3002/api/user
- localhost:3002/api/user/post
