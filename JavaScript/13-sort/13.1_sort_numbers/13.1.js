

const numbers = [1, -5, 666, 2, 400, 11];

console.log(numbers.slice().sort((a, b) => a - b));

console.log(numbers.slice().sort((a, b) => b - a));