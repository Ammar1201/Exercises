const countryToLiveIn = (language, island, population, country = `Israel`) => {
  if(language === `Hebrew` && population < 50000000 && !island)
    console.log(`You should live in ${country}`);
  else
    console.log(`${country} does not meet your criteria`);
}

countryToLiveIn(`English`, false, 49999999);
countryToLiveIn(`Hebrew`, false, 15000000);