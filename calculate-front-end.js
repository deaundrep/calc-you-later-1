/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate = require('./calculate-back-end.js')

const num1 = process.argv[2];
const operation = process.argv[3];
const num2 = process.argv[4];

console.log(calculate(num1,num2,operation))

const result = calculate(num1,num2,operation)



/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}
