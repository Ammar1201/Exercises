

//! 1-

console.log(this);

//* this points to the window object because it is the global scope

//! 2- 

const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

//* a - this points to the window object because we are using an arrow function
//* b - we can fix this by using regular function instead of arrow function - greet() {console.log(`Hello ${this.name}`);}

//! 3-

const myFuncDec = function () {
  console.log(this);
};
  
//* this points to the window object because it's in the global scope (the global scope is the owner of the function)

//! 4-

const myFuncArrow = () => {
  console.log(this);
};

myFuncArrow();

//* this points to the window object because it's in the global scope (the global scope is the owner of the function)

//! 5- 

document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

//* a - this points to the window object because we are using an arrow function
//* b - we can fix this by using regular function instead of arrow function - document.querySelector(".element").addEventListener(function (console.log(this);))
