//? 1.1- Basic loop
// You are given this array:
const words = ['one', 'two', 'three', 'four', 'five'];
// Loop over this array with the forEach method and console log each
// element and its index.

// words.forEach((word, index) => {
//   console.log(word, index);
// });

//? 1.2- ToNumber
// Create a function ToNumber that takes one argument an array.
// Return from the function a new array changing the strings of numbers to
// actual numbers. Use the forEach method to accomplish this.
const num = ['1', '2', '3', '4', '5'];

// function toNumber(arr) {
//   const res = [];
//   arr.forEach((num) => {
//     res.push(parseInt(num));
//   })
//   return res;
// }

// console.log(toNumber(num));

//? 1.3-Fruits
// You are given this array of fruits:

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Loop over this array with the forEach method and console log this
// sentence : “I am eating a <fruit name>”. But if the fruit is an apple. You
// need to console log “I am eating an Apple.
// Notice we changed the “a” to “an”.

fruits.forEach((e) => {
  if (e !== "apple") {
    console.log(`I'm eating aa ${e}`);
  }
  else {
    console.log(`I'm eating a ${e}`);
  }
});


//? 1.4- Mutate the array
// You are given this array of numbers:
const numbers = [1, 2, 3, 4, 5];
// Iterate over this array with the forEach method. With the help of the third
// argument of the forEach method (which is the array you are looping over)
// mutate the array that every number double value.

numbers.forEach((e, i, arr) => {
  arr[i] *= 2;
});
console.log(numbers);
