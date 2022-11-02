
const array = () => {
  let people = ["Greg", "Mary", "Devon", "James"];

  for(let i = 0; i < people.length; i += 1) {
    console.log(people[i]);
  }
  
  console.log(`-----------------------------------`);

  people.shift();//remove `Greg`
  people.pop();//remove `James`
  people.unshift(`Matt`);//add "Matt" to the front of the array
  people.push(`Ammar`);

  for(let i = 0; i < people.length; i += 1) {
    console.log(people[i]);
    if(people[i] == `Mary`)
      break;
  }

  let peopleCopy = people.slice(2,4);

  console.log(`-----------------------------------`);

  console.log(people.indexOf(`Mary`));

  console.log(`-----------------------------------`);
  
  console.log(people.indexOf(`Foo`));

  people = ["Greg", "Mary", "Devon", "James"];

  people.splice(2, 1);

  people.splice(2, 0, `Elizabeth`, `Artie`);

  let withBob = people + `,Bob`;
}

array();
