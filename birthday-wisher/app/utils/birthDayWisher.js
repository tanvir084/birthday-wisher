/*
 * Function to send birthday wisher to particular customer
 * Email for sending wish to particular customer email
 */

const birthDayWisher = (email) => {
  /*
    * For now we use console for mimic
    * In future we can use nodemailer, mailgun to send wish to real mail 
  */
  console.log(`Sending Email => ${email}`);
  console.log('Happy BirthDay To You. Wishes you a very happy life.');
};

module.exports = {
  birthDayWisher,
};
