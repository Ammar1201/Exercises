
// function calcAverage (arr){
//   var sum ; // sum is not initialized
//   for ( var i = 0 ; i < arr .length; i ++ ){
//     sum += arr [ i ];
//   } 
//   return sum ;
// }

// calcAverage ([ 85 , 90 , 92 ]);

function calcAverage (arr){
  var sum = 0; // sum is not initialized
  for (var i = 0; i < arr.length; i++){
    sum += arr [i] ;
  } 
  return sum;
}

console.log(calcAverage ([ 85 , 90 , 92 ]));

// the method used to find the bug debugging tool
