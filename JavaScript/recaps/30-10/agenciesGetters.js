import ourCarMarket from './data.js';

//!------------- Agencies Getters ----------------------
//* 1. getAgencyByName
//? @param {array}     - agenciesArr
//? @param {string}    - name - agency name.
//? @return {object[]} - Array of agencies found,
//?                      and if it didn't, return empty array.
const getAgencyByName = (agenciesArr, name) => {
  return agenciesArr.filter((agency) => agency.agencyName === name);
};

//* 2. getAgencyById
//? @param {array}   - agenciesArr
//? @param {string}  - id - agency id.
//? @return {string} - agencyId
const getAgencyById = function (agenciesArr, id) {
  return agenciesArr.find((agency) => agency.agencyId === id);
};

//* 3. getAllAgenciesNameAndId
//? @param {array}     - agenciesArr
//? @return {Object[]} - Array of agency objects.
//?                      The object includes the keys 'name' and 'id'
const getAllAgenciesNameAndId = (agenciesArr) => {
  return agenciesArr.map(({agencyName:name, agencyId:id}) => {
    return {name, id};
  });
};
//* 4. getCarsToBuy
//? @param {array}    - agenciesArr
//? @return {object[]} - array of cars objects that are for sale
const getCarsToBuy = (agenciesArr) => {
  const cars = [];
  agenciesArr.forEach((agency) => {
    for(let brand in agency.cars) {
      cars.push([...agency.cars[brand]]);
    }
  });
  return cars;
};

console.log(getCarsToBuy(ourCarMarket.sellers));

//* 5. getCarsToBuyByModel
//? @param {array}     - agenciesArr
//? @param {string}    - carModel
//? @return {object[]} - arrays of cars objects that are for sale by brand
const getCarsToBuyByModel = (agenciesArr, model) => {
  // return agenciesArr.map((agency) => {
  //   if(agency.cars[model] !== undefined) {
  //     return agency.cars[model];
  //   }
  // });
  return getCarsToBuy(agenciesArr).filter((car) => car.name === model);
};

export {getAgencyByName, getAgencyById, getAllAgenciesNameAndId, getCarsToBuy, getCarsToBuyByModel};