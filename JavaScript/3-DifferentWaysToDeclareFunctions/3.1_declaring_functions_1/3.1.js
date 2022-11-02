/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/


// From function declarations to function expressions
function welcome() {
  let welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
}

const welcome_exp = () => {
  let welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
}

console.log(welcome());
console.log(welcome_exp());
console.log('-----------------------------------');

//------------------------------------------------

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

const power_exp = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

console.log(power(5));
console.log(power_exp(5));
console.log('-----------------------------------');

//------------------------------------------------

function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}

const add_exp = (a, b = 5) => {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}

console.log(add(1,6));
console.log(add_exp(1,6));
console.log('-----------------------------------');

//------------------------------------------------


// From function expressions to function declarations
const hello = () => "Hello!";

function hello_dec() {
  return "Hello!"
}

console.log(hello());
console.log(hello_dec());
console.log('-----------------------------------');

//------------------------------------------------

const squareRoot = a => Math.sqrt(a);

function squareRoot_dec(a) {
  return Math.sqrt(a);
}

console.log(squareRoot(25));
console.log(squareRoot_dec(25));
console.log('-----------------------------------');

//------------------------------------------------

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers_dec(a, b) {
  return Math.random() * (a - b) + b;
}

console.log(randomNumbers(1,10));
console.log(randomNumbers_dec(1,10));
console.log('-----------------------------------');
