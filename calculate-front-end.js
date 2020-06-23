/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate = require('./calculate-back-end.js')

const num1 = getInput[2];
const operation = getInput[3];
const num2 = getInput[4];

console.log(calculate(num1,num2,operation))

const result = calculate(num1,num2,operation)

console.log(result)

/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}
