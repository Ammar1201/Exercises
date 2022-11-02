const lengthOfWords = (arr) => {
  
let lengths = [];

for(let i = 0; i < arr.length; i += 1){
  let len = arr[i].length;
  lengths.push(len);
}

return lengths;

}

console.log(lengthOfWords(["boo", "doooo", "hoo","ro"]));