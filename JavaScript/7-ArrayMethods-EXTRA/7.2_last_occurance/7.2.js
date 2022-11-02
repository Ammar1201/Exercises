
const string = "The more you know, the more you know that you don't know";

function lastOccurence(str, word) {
  let index = str.indexOf(word);
  while(str.indexOf(word, index + 1) != -1) {
    if(str.indexOf(word, index + 1) != -1) {
      index = str.indexOf(word, index + 1);
    }
  }
  return index;
}

console.log(lastOccurence(string, `know`));