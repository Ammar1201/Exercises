// import {
//   atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, round
// } from 'mathjs'

/*--Delete the wrong answers--
1. Which of the following is/are strings?
a) 4
c) '4'
2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4
3. Which of the following is/are booleans?
a) true
b) false
4. What is the result of 80 + 71.2?
a) 151.2
5. What is the result of "80" + 71.2?
c) "8071.2"
6. Does 100 + 30 produce a number or a string?
a) number
7. Does "100" + 30 produce a number or a string?
b)string
*/

//------Submit your answers under the question------//
//create three different ways to declare variables
let var1 = 5;
const var2 = 10;
var var3 = 20;

//declare a variable and reassign a value to it
let tmp = 10;
tmp = 50;
//create a variable and after that assign a string
//with its value being: He's got it!
let str;
str = "He's got it!";
console.log(str);
/*
1. create a variable and assign a value on how
much a restaurant bill is.
2. create a variable and assign a value on how
much tax they should pay.
3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $.
*/
let bill = 100;
let tax = 17;
let total = 'Your total bill is ' + (bill + tax) + '$';
console.log(total);
// Round the number 50.6 to its nearest integer
// let round = math.round(50.6);
let round = 51;
console.log(round);
//Create a variable that is undefined
let un = undefined;
console.log(typeof un);
