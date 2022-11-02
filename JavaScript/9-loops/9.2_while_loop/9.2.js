const lengthOfWords = (arr) => {
  
  let lengths = [];
  let i = 0;
  
  while(i < arr.length) {
    let len = arr[i].length;
    lengths.push(len);
    i++;
  }
  
  return lengths;
  
  }
  
  console.log(lengthOfWords(["boo", "doooo", "hoo","ro"]));

  //for loop is better and more readable