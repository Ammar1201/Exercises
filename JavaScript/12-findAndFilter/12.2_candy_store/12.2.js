
const candyStore = {
  candies: [
  { name: "mint gum", id: "as12f", price: 2, amount: 2 },
  { name: "twix", id: "5hd7y", price: 5, amount: 4 },
  ],
  cashRegister: 200
  }

// 1.------------------------------------------------
  function getCandy(candyStore, id) {
    return candyStore.candies.find((candy) => {
      return candy.id == id;
    });
  }

  // console.log(getCandy(candyStore, `5hd7y`));

// 2.------------------------------------------------
  function getPrice(candyStore, id) {
    const price =  candyStore.candies.find((candy) => {
      if(candy.id == id) {
        return candy;
      }
    });
    return price.price;
  }

  // console.log(getPrice(candyStore, `as12f`));

// 3.------------------------------------------------
function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    name: name,
    id: id,
    price: price,
    amount: 1
  });
}

// addCandy(candyStore, `ft12u`, `5gum`, 4);
// console.log(candyStore);

// 4.------------------------------------------------
function buy(candyStore, id) {
  let candy = getCandy(candyStore, id);
  candy.amount -= 1;
  candyStore.cashRegister += getPrice(candyStore, id);
}

// buy(candyStore, `5hd7y`);
// console.log(candyStore);