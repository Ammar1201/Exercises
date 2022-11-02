
const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const food2 = ["Fries", "Chicken", "Pizza", "Pickles", "Hamburgers"];

function compare (food, food1) {

  let items = [];

  for(let i = 0; i < food.length; i++) {
    for(let j = 0; j < food1.length; j++) {
      if(food[i] == food1[j]) {
        items.push(food[i]);
      }
    }
  }

  if(items.length == 0)
    return false;
  else
    return items;
}

console.log(compare(food, food1));
console.log(compare(food, food2));
