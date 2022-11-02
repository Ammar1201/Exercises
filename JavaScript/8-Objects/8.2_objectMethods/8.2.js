const myCountry = {
  country : `Finland`,
  capital : `Helsinki`,
  language : `Finnish`,
  population : `6 million`,
  nieghbors : [`Italy`, `France`, `Germany`],
  describe : function() {
    return `${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.nieghbors.length} nieghbouring countries and a capital called ${this.capital}`;
  },
  checkIsland : function() {
    myCountry.island = this.nieghbors.length === 0 ? true : false;
  }
}

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.island);

