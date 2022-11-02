
Array.prototype.filter = function(callBack) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

Array.prototype.find = function(callBack) {
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i])) {
      return this[i]
    }
  }
  return undefined;
};

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12