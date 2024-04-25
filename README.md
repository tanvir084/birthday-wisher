
# Birthday Wisher

Welcome to the Birthday Wisher project! This application automatically checks and wishes users a happy birthday based on their birthdates stored in the database. The standout feature of this project is its capability to register multiple customers at once and schedule birthday wishes for everyone.

## Features

### 1. Automated Multiple Customer Registration

The backend automatically generates up to 5 dummy customer records with random names, birthdates, and email addresses. This automated feature eliminates the need for user input, making the registration process seamless and hassle-free.

### 2. Automated Birthday Wishing Scheduler

The backend can generate up to 5 dummy customer records with random user names, birthdates, and email addresses by hitting an API endpoint. This automated feature provides a flexible way to register customers without requiring user input, making the registration process seamless and hassle-free.

## Technologies Used
1. Node.js
2. Express.js
3. MongoDB

## Prerequisites
Before running this application, ensure you have the following installed:

**For Local Environment:**
1. Node.js (version >= 18.0.0)
2. MongoDB 

**For Docker Environment:**
1. Docker

## Getting Started

### Run in Locally:

Follow these steps to get started with the Birthday Wisher project run locally:

1. **Clone the Project:**
   ```bash
   git clone https://github.com/tanvir084/routine-planner-be.git
   ```

2. **Navigate to Project Folder:**

   ```bash
   cd birthday-wisher
   ```

2. **Resolve Dependencies:**
   ```bash
   npm install
   # or
   yarn 
   ```

3. **Add Secret:**
   
   Create a .env file in the same directory as example.env and copy the 
   variables from example.env. Replace the placeholder values with your secret 
   values.

4. **Start the Project:**
   ```bash
   npm run start
   # or
   yarn start
   ```
### Run in Docker:
Follow these steps to get started with the Birthday Wisher project through docker:

1. **Add Secret:**
   
   Create a .env file in the same directory as example.env and copy the 
   variables from example.env. Replace the placeholder values with your secret 
   values.

2. **Start the System:**
   
   We can easily run the whole with only a single command:
   ```bash
   docker compose up -d
   ```

2. **Stop the System:**

   Stopping all the running containers is also simple with a single command:
   ```bash
   docker compose down
   ```



## API Documentation:
Learn more about API routes [Click Here](https://documenter.getpostman.com/view/19524228/2sA3BrZWHu).