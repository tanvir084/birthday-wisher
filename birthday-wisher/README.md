
# Birthday Wisher

Welcome to the Birthday Wisher project! This application automatically checks and wishes users a happy birthday based on their birthdates stored in the database. The standout feature of this project is its capability to register multiple customers at once and schedule birthday wishes for everyone.

## Features

### 1. Automated Multiple Customer Registration

The backend can generate up to 5 dummy customer records with random user names, birthdates, and email addresses by hitting an API endpoint. This automated feature provides a flexible way to register customers without requiring user input, making the registration process seamless and hassle-free.

### 2. Automated Birthday Wishing Scheduler

The application automatically checks the birthdates of the registered customers against the current date every day during the first hour at 12 AM (midnight). When the birthdate of a customer matches the current date, the application schedules and sends out personalized birthday wishes via email. This feature ensures timely and automated birthday greetings without user intervention.

## Technologies Used
1. Node.js
2. Express.js
3. MongoDB

## Prerequisites
Before running this application, ensure you have the following installed:
1. Node.js (version >= 18.0.0)
2. MongoDB 

## Getting Started

Follow these steps to get started with the Birthday Wisher project run locally:

1. **Resolve Dependencies:**
   ```bash
   npm install
   # or
   yarn 
   ```

2. **Add Secret:**
   
   Create a .env file in the same directory as example.env and copy the 
   variables from example.env. Replace the placeholder values with your secret 
   values.

3. **Start the Project:**
   ```bash
   npm run start
   # or
   yarn start
   ```

## Test Cases: 
We can run all the unit test by a single command:
   ```bash
   yarn test
   ```

## API Documentation:
Learn more about API routes [Click Here](https://documenter.getpostman.com/view/19524228/2sA3BrZWHu).