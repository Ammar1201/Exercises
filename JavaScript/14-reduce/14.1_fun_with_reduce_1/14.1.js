
const numbers = [1, -5, 666, 2, 400, 11];

const max = numbers.reduce((max, currentValue) => {
  if(currentValue > max) {
    return currentValue;
  }
  return max;
});

console.log(max);

const sumEvens = numbers.reduce((sum, currentValue, index) => {
  if(index == 1) {//to check if the first value is even
    if(sum % 2 == 0) {
      return sum;
    }
    else {
      sum = 0;
    }
  }
  if(currentValue % 2 == 0) {
    return sum + currentValue;
  }
  return sum;
});

console.log(sumEvens);

const avg = numbers.reduce((avg, currentValue, index, arr) => {
  if(index == arr.length - 1) {
    avg += currentValue;
    return avg / (index + 1);
  }
  return avg + currentValue;
});

console.log(avg);

