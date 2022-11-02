
function greaterThan10(value) {
  return new Promise((resolved, rejected) => {
    if(value > 10) {
      resolved('greater Than 10');
    }
    else {
      rejected('smaller Than 10');
    }
  });
}

greaterThan10(20)
  .then((greater) => {
    console.log(greater);
  })
  .catch((smaller) => {
    console.log(smaller);
  });