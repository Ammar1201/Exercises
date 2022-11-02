
const arr = [1, 4, 9, 16, 25];

// 1.------------------------------------------------
const doubleValues = arr.map((num) => {
  return num * 2;
});

// console.log(doubleValues);

// 2.------------------------------------------------
const onlyEvens = [];
arr.forEach((num) => {
  if(num % 2 === 0) {
    onlyEvens.push(num);
  }
});

// console.log(onlyEvens);

// 3.------------------------------------------------
const showFirstAndLast = [];
arr.forEach((num ,index) => {
  if(index == 0 || index == arr.length - 1) {
    showFirstAndLast.push(num);
  }
});

// console.log(showFirstAndLast);

const words = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];

// 4.------------------------------------------------
const vowelCount = {};
words.forEach((str) => {
  str = str.toLowerCase();
  str = str.replace(/\s/g, '');//to remove spaces
  for(let i = 0; i < str.length ; i++) {
    if(vowelCount[str[i]] == undefined) {
      vowelCount[str[i]] = 1;
    }
    else {
      vowelCount[str[i]]++;
    }
  }

});

// console.log(vowelCount);

// 5.------------------------------------------------
const capitalize = words.map((str) => {
  return str.toUpperCase();
});

// console.log(capitalize);

// 6.------------------------------------------------
const shiftLetters = words.map((str) => {
  let tmp = '';
  for(let i = 0; i < str.length ; i++) {
    if(str.charCodeAt(i) === 97) {
      tmp += String.fromCharCode(122);
    }
    else if(str.charCodeAt(i) === 65) {
      tmp += String.fromCharCode(90);
    }
    else {
      tmp += String.fromCharCode((str.charCodeAt(i)) - 1);
    }
  }
  return tmp;
});

// console.log(shiftLetters);

// 7.------------------------------------------------

