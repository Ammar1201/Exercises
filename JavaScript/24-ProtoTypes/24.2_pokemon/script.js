
function Pokemon(pokemonName, pokemonType,
  pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pokemon1 = new Pokemon('pokemon1', 'water', ['waterBall', 'waterWave']);
const pokemon2 = new Pokemon('pokemon2', 'fire', ['fireBall', 'fireWave']);
const pokemon3 = new Pokemon('pokemon3', 'electric', ['electricBall', 'electricWave', 'electricShock']);

Pokemon.prototype.callPokemon = function() {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function(attackNumber) {
  console.log(`${this.name} used ${this.attackList[attackNumber]}`);
};

pokemon1.callPokemon();
pokemon1.attack(0);

console.log('---------------------------------------------------');

pokemon2.callPokemon();
pokemon2.attack(1);

console.log('---------------------------------------------------');

pokemon3.callPokemon();
pokemon3.attack(2);

