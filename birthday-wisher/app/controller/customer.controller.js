const db = require("../models");
const { pickRandomNumber } = require("../utils");

const Customer = db.customer;

const registerController = async (req, res) => {
  try {
    // First check how many customers we have
    const oldCustomers = await Customer.find({}).lean();
    const oldCustomersNumber = oldCustomers?.length;

    // Create new 5 Customers
    const newCustomemrs = [];

    for(let i = oldCustomersNumber + 1; i <= oldCustomersNumber + 5; i++) {
      const createCustomer = await Customer.create({
        userName: `user${i}`,
        email: `user${i}@gmail.com`,
        birthDate: `${pickRandomNumber(1900, 2023)}/${pickRandomNumber(1, 12)}/${pickRandomNumber(1, 28)}`, // yyyy/mm/dd format
      });

      newCustomemrs.push(createCustomer);
    }

    return res.status(201).send({
      success: true,
      message: 'Five customers register successfully.',
      data: newCustomemrs,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ success: false, message: err?.mesage });
  }
};

module.exports = {
  registerController,
};
