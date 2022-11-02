//(population / 7900) * 100

function precentageOfWorld (population) {
  return (population / 7900) * 100;
}

const populations = [80, 60, 70, 50];//values in millions

const populationPercentages = (populations) => {
  const percentages = [];

  for(let i = 0; i < populations.length; i += 1){
    percentages.push(precentageOfWorld(populations[i]).toFixed(2));
  }

  return percentages;
}

console.log(populationPercentages(populations));