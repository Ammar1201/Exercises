
function makeAllCaps(words) {
  return new Promise((resolved, reject) => {
    const capitals = words.map(word => {
      if(typeof word === 'string') {
        return word.toUpperCase();
      }
      reject('Not a String');
    });

    resolved(capitals);
  });
}
  
function sortWords(words) {
  return new Promise((resolved, reject) => {
    words.forEach(word => {
      if(typeof word !== 'string') {
        reject('Not a String');
      }
    });
    resolved(words.sort());
  });
}
  
const str = ['hello', 'words', 'world', 'hidden', 'hi'];

const arr = ['hello', 'words', 80, 'world', 'hidden', 'hi'];

makeAllCaps(str)
  .then((capitalized) => sortWords(capitalized))
  .then((sorted) => {
    console.log(sorted);
  })
  .catch((err) => {
    console.log(err);
  });

makeAllCaps(arr)
  .then((capitalized) => sortWords(capitalized))
  .then((sorted) => {
    console.log(sorted);
  })
  .catch((err) => {
    console.log(err);
  });