

// Block 1

// function funcA() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// funcA();

// logs ↓
// undefined - javascript knows there is var a but not the value so if we log before declaration will log undefined

// we can fix this if we put console.log(a); after var a = 1

// 2 - functions doesn't matter if you call them before or after declaration they always work except function expressions 

// -----------------------------------------------------------



// Block 2

// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
//   fullName: 'Aurelio De Rosa',
//   getFullName: function () {
//     return this.fullName;
//   }
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

// logs ↓
// Aurelio De Rosa - nearest declared variable
// undefined - 

// -----------------------------------------------------------



// Block 3

// function funcB() {
//   let a = b = 0;
//   a++;
//   return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);

// logs ↓
// a is undeclared - a in the function scope can't access outside
// b is undeclared - b in the function scope can't access outside

// -----------------------------------------------------------




// Block 4

// function funcC() {
//   console.log("1");
//   }
// funcC();
// function funcC() {
//   console.log("2");
// }
// funcC();

// logs ↓
// 1
// funcC is already declared ???

// -----------------------------------------------------------




// Block 5

// function funcD1() {
//   d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//   var e = 1;
// }
// funcD2();
// console.log(e);
  
// logs ↓
// d is not declared ???
// 1

// -----------------------------------------------------------




// Block 6

// function funcE() {
//   console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();

// logs ↓
// Value of f in local scope: 1
// Value of f in global scope: undefined

// -----------------------------------------------------------
