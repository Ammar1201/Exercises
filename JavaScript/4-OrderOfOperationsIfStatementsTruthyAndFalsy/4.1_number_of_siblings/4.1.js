const prompt = require('prompt-sync')();
let numSiblings = prompt('');

if(Number(numSiblings) === 1)
  console.log('1 Sibling!');
else if(Number(numSiblings) > 1)
  console.log('More than 1 sibling');
else
  console.log('No siblingd');

//nothing happend when used === and convertion logged '1 sibling' when numSiblings value was 1 the same thing for == and no convertion