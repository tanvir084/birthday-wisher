// Function to pick a random number within a range
const pickRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  pickRandomNumber,
};