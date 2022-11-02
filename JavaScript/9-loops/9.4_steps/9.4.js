

function steps(N) {

  if(N == 1) {
    console.log(`#`);
    return;
  }

  let str = '';
  let tmp = '';

  for(let i = 0; i < N; i++) {
    str = str + `#`;
    for(let j = i + 1; j < N; j++) {
      tmp = tmp + `'`;// ' = empty space to be more visible in terminal
    }
    console.log(str + tmp);
    tmp = '';
  }

}

steps(1);
console.log('---------------------------------------');
steps(2);
console.log('---------------------------------------');
steps(3);
console.log('---------------------------------------');
steps(4);