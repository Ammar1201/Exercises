
//!------------- Customers Getters ----------------------
//* 8. getCustomerByName
//? @param {array}    - customersArr
//? @param {string}    - name - customer name.
//? @return {Object[]} - Array of customers found,
//?                      and if it didn't, return empty array.
//! Question: Why do you think the function returns an array and not the client object?
const getCustomerByName = (customersArr, name) => {
  return customersArr.filter((customer) => {
    return customer.name.includes(name);
  });
};

//* 9. getCustomerById
//? @param {array}  - customersArr
//? @param {string}  - id - customer id
//? @return {string} - agencyId
const getCustomerById = (customersArr, id) => {
  return customersArr.find((customer) => {
    return customer.id === id;
  });
};

//* 10. getAllCustomersCars
//? @param {array}  - customersArr
//? @return {object[]} - customerCarsArr - Array of all customer cars object
const getAllCustomersCars = (customersArr) => {
  const cars = [];
  customersArr.forEach((customer) => {
    for(let model in customer.cars) {
      cars.push(customer.cars[model]);
    }
  });
  return cars;
};

export {getCustomerByName, getCustomerById, getAllCustomersCars};