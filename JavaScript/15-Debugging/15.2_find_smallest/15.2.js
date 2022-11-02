
function findSmallest(a, b, c){
  if (a > b > c){
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}

// findSmalest(52,66, 2); //name of the function is wrong should be smallest

// the method used to find the terminal

console.log(findSmallest(52,66, 2)); // need log to see the value