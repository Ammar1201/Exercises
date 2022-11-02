

// block1

// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

// firstResult = 5
// result = 5

// -----------------------------------------------------------

// block2

// var a = 1;
// function b2() {
//   a = 10;
//   return;
//   function a() { }
// }
// b2();
// console.log(a);

// 1

// -----------------------------------------------------------

// block3

// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

// 0 1 2