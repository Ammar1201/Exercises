
function swap(obj) {
  const swappedObj = {};
  for(let key in obj) {
    swappedObj[obj[key]] = key;
  }
  return swappedObj;
}

const obj = {
  first : 1,
  second : `two`,
  third : [1 , 2]
}

console.log(swap(obj));