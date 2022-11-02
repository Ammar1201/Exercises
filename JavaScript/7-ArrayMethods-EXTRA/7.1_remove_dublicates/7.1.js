
function duplicates(arr) {
  let dupl = arr.filter((c, index) => {
    return arr.indexOf(c) === index;
  });

  return dupl;
}

let arr = [3,4,4,3,6,3];
console.log(duplicates(arr));