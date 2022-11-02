
// function getSum(arr1, arr2){
//   const sum = 0; //const variable can't be reassigned
//   for (let i=0; i < arr1.length; i++){
//     sum += arr1[i];
//   }
//   for (let i=0; i < arr2.length; i++){
//     sum += arr2[i];
//   }
//   // no value is been returned
// }

// getSum([1,2,3][5,66,23]); //missing , between the two arrays

// the method i used to find the bug is just ran the code and saw the errors the terminal gave and solved them


function getSum(arr1, arr2){
  let sum = 0; //const variable can't be reassigned
  for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
  }
  for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
  }
  return sum;// no value is been returned
}

console.log(getSum([1,2,3][5,66,23])); // need log to see the value