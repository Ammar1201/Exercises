const highiestScore = () => {

  let johnsTeam = (89 + 94 + 123) / 3;
  let mikesTeam = (116 + 94 + 123) / 3;
  
  if(johnsTeam > mikesTeam)
    console.log(`john's team wins`);
  else if (mikesTeam > johnsTeam)
    console.log(`mike's team wins`);
  else
    console.log(`draw`);

}

highiestScore();