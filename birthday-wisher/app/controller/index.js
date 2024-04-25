const customerControllers = require("./customer.controller");
const cronControllers = require("./cron.controller");

module.exports = {
  ...customerControllers,
  ...cronControllers,
};
