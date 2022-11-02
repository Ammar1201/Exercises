const countryInfo = (country, population, capitalCity) => {
  return country + ' has ' + population + ' people and its capital city is ' + capitalCity;
}

let var1 = countryInfo('Spain', '47 million', 'Madrid');
let var2 = countryInfo('Italy', '30 million', 'Rome');
let var3 = countryInfo('France', '80 million', 'Paris');

console.log(var1);
console.log(var2);
console.log(var3);