const db = require('../models');
const cron = require('node-cron');
const { birthDayChecker, birthDayWisher } = require('../utils');

const Customer = db.customer;

/*
    * Scheduler Function for Automated Birthday Wishes
    * This function runs every day at 12:00 AM to check for birthdays
    * If a customer's birthday matches the current date, an email with birthday wishes is sent to the customer
*/

const scheduler =  async () => {
  // cron.schedule(' */60 * * * * *', async () => {  // For testing, which will run after every 60 seconds
  cron.schedule(' 0 0 * * * *', async () => {
    const customers = await Customer.find({}).lean();

    console.log('Cron runnnning............');
    for (let i = 0; i < customers?.length; i++) {
      if (birthDayChecker(customers[i]?.birthDate)) {
        birthDayWisher(customers[i]?.email);
      }
    }
  });
};

module.exports = {
  scheduler,
};


