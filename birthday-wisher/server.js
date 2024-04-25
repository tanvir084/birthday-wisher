const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { addHeader } = require("./app/middlewares");
const db = require("./app/models");
const app = express();
const mongoURI = process.env.MONGODB_URI;

const { customerRouter } = require('./app/routes');
const { scheduler } = require("./app/controller");

// Cors Options
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

scheduler(); // Call the function to start the birthday wisher cron jobs

// Database Connection
const dbConnect = async (db) => {
  const url = mongoURI;
  console.log(url);
  try {
    await db.mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb Connected");
  } catch (err) {
    console.error("Error at dbConnect ::", err);
    process.exit(1);
  }
};

dbConnect(db).catch((error) => console.error(error));

app.use(function (req, res, next) {
  addHeader;
  next();
});

app.use(customerRouter);

// set port, listen for requests
const PORT = process.env.SERVER_PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = {
  app,
  server,
};
