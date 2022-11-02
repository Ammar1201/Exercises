
// function getSumOfEven(arr){
//   return arr[2] + arr[4] + arr[6] + arr[8] + arr[10]; // index 10 out of bound and the odd indexes is the even values
// }

// getSumOfEven([1,2,3,4,5,6,7,8,9,10]);

function getSumOfEven(arr){
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9]; // index 10 out of bound and the odd indexes is the even values
}

console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

// the method used to find the bug debugging tool