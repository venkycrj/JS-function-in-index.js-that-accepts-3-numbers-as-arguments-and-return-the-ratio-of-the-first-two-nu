const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumbers = require("../factorial/index.js");

const ratioAndFactorial = (number1, number2, number3) => {
  const ratio = ratioOfTwoNumbers(number1, number2);
  const factorial = factorialOfNumbers(number3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
