
const data = [
  {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: { meats: ["hamburgers", "sausages"], fish: ["salmon", "pike"] }
  },

  {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: { meats: ["hamburgers", "steak", "lamb"], fish: ["tuna", "salmon", "barracuda"] }
  },

  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: { meats: ["ham", "chicken"], fish: ["pike"] }
  }
]

const names = data.map((e) => {
  return e.name;
});

// console.log(names);

const objects1990 = [];
data.forEach((e) => {
  let year = e.birthday.split('-');
  if(year[2] < 1990) {
    objects1990.push(e);
  }
});

// console.log(objects1990);

const foodCount = {};
data.forEach((food) => {
  let meat = food.favoriteFoods.meats;
  let fish = food.favoriteFoods.fish;
  let tmp = meat.concat(fish);
  for(let i = 0; i < tmp.length ; i++) {
    if(foodCount[tmp[i]] == undefined) {
      foodCount[tmp[i]] = 1;
    }
    else {
      foodCount[tmp[i]]++;
    }
  }
});

// console.log(foodCount);