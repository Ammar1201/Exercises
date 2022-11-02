
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.slice().sort());

console.log(foods.slice().sort((a, b) => a - b));

console.log('-------------------------------------------------------------');

const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

console.log(foodsWithUpperCase.slice().sort());

console.log(foodsWithUpperCase.slice().sort((a, b) => a - b));

console.log('-------------------------------------------------------------');

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const longestWord = words.sort((first, second) => {
  return second.length - first.length;
});

console.log(longestWord);

