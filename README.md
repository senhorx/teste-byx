## 💻 Prerequisites

### Before you begin, make sure you've met the following requirements:
* You installed the latest version of Python, NodeJS
* You have a Linux machine

## 🚀 Installing TEST-BYX


### To install TEST-BYX, follow these steps:

### Install the python packages used in the application
```
pip install -r requirements.txt
```

### Create your environment variables
```
cp env.template .env
```

### After that enter the folder with `cd /backend` and follow these steps:
1. Check for migrations to be done with `python manage.py makemigrations`
2. Run the migrations that were already captured with `python manage.py migrate`
3. Create a superuser with `python manage.py createsuperuser`
4. Run the backend application with `python manage.py runserver`
5. Your backend server should now be running

### Frontend installation follow the following steps:

1. Enter the `/frontend` folder
2. Run the `npm install` command
2. Run the `npm start` command
5. Your frontend server should now be running


## 🚀 Endpoints do Backend

### GET TOKEN
```
http://YOUR_HOST:YOUR_PORT/auth/
```
Body: `username` and `password`

`The username and password you create with the call createsuperuser`

### GET Item
```
http://YOUR_HOST:YOUR_PORT/item/
```
Header: `Authorization: Token TOKEN_AT_AUTH_ENDPOINT`

`The TOKEN you get at Auth endpoint`

### POST Item
```
http://YOUR_HOST:YOUR_PORT/item/
```
Body: `file`

`In file param you pass your file for send new products to your database`

## 🚀 Run Frontend

For your frontend to run perfectly, just enter the `./frontend/src/Components/Dashboard/variables.ts` folder and update the `Token` variable with the endpoint Token from above `GET TOKEN`

## 😄 Use the project made

After following the steps above, you can use the project for its intended purpose.

`I'm sorry for not meeting all the requirements but I didn't have much time to dedicate to this project, but the time I dedicated I did with all the affection`