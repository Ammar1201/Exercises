const array = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];

function countLetters (arr) {
  const obj = {};
  for(let i = 0; i < arr.length; i++) {
    let elem = arr[i].toLowerCase();
    elem = elem.replace(/\s/g, '');//to remove spaces
    for(let j = 0; j < elem.length ; j++) {
      if(obj[elem[j]] == undefined) {
        obj[elem[j]] = 1;
      }
      else {
        obj[elem[j]]++;
      }
    }
  }
  return obj;
}

console.log(countLetters(array));

//{ h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:1, m: 2, t: 1, b: 1, s: 1 }
