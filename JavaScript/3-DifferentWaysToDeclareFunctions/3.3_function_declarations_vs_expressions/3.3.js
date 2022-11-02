function precentageOfWorld1 (population) {
  return (population / 7900) * 100;
}

const precentageOfWorld2 = (population) => {
  return (population / 7900) * 100;
}

console.log(precentageOfWorld1(1441).toFixed(1));
console.log(precentageOfWorld1(1234).toFixed(1));
console.log(precentageOfWorld1(1861).toFixed(1));

console.log(`------------------------`);

console.log(precentageOfWorld2(1441).toFixed(1));
console.log(precentageOfWorld2(1234).toFixed(1));
console.log(precentageOfWorld2(1861).toFixed(1));

