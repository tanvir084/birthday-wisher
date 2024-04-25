/*
    * Function to check today is birthday or not
    * birthDay format is yyyy/mm/dd ex: 2010/11/11 or yyyy-mm-dd ex: 2010-11-11
*/

const birthDayChecker = (birthDay) => {
  // Get current date
  const currentDate = new Date();

  // Get birthDate in current date format
  const birthdate = new Date(birthDay);

  if (
    currentDate.getDate() === birthdate.getDate() &&
    currentDate.getMonth() === birthdate.getMonth()
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  birthDayChecker,
};
