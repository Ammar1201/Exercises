const boom = (n) => {

  let str = ``;

  for(let i = 1; i <= n; i += 1) {
    if(i % 7 === 0) {
      if(i.toString().includes('7'))
        str += `BOOM-BOOM, `;
      else
        str += `BOOM, `;
    }
    else if(n === i)
      str += `${i}`;
    else
    str += `${i}, `;
  }

  return str;
}

console.log(boom(49));