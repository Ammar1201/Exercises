
// function countOccurrences (str, char){
//   let counter = 0 ;
//   for ( let i = 0 ; i < str .length; i ++ ){
//     if ( str . charAt ( i ) === char ){
//       counter + 1 ; // needs to be counter += 1 or counter = counter + 1 or counter++
//     }
//   } 
//   return counter ;
// }

//countOccurrences ( "ini mini miny moe" , "n" );

function countOccurrences (str, char){
  let counter = 0;
  for (let i = 0; i < str .length; i++){
    if (str.charAt(i) === char){
      counter += 1; // needs to be counter += 1 or counter = counter + 1 or counter++
    }
  } 
  return counter;
}

console.log(countOccurrences ( "ini mini miny moe" , "n" ));

// the method used to find the bug debugging tool