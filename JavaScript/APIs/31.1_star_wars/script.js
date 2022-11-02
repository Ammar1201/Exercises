
//* https://swapi.dev/api/people/1

/**
  1. Name
  2. Height
  3. Hair Color
  4. The planet they came from
  5. Planet population
 */

const table = document.createElement('table');

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error('Error fetching');
    }
    const data = await res.json();
    return data;
  }
  catch(error) {
    // errorMsg.textContent = `character number "${num}" not found`;
    console.log(error.message);
  }
};


const structureData = async (results, planets) => {
  return results.map(({name, height, hair_color}, index) => {
    return {
      name,
      height,
      hair: hair_color,
      planet: {
        name: planets[index].name,
        populations: planets[index].population
      }
    }
  });
}

const fetchCharacters = async (url) => {
  const promises = [];
  const {results} = await fetchData(url);
  for(let i = 0; i < results.length; i++) {
    const planet = fetchData(results[i].homeworld);
    promises.push(planet);
  }
  const planets = await Promise.all(promises);
  return structureData(results, planets);
}

const initializeTable = () => {
  document.body.appendChild(table);
  const th = document.createElement('th');
  th.setAttribute('colspan', '5');
  th.textContent = 'Star Wars';
  table.appendChild(th);
}

const addDataKeys = (data) => {
  const row = document.createElement('tr');
  table.appendChild(row);
  for(let key in data) {
    if(typeof data[key] !== 'object') {
      const th = document.createElement('th');
      th.textContent = key;
      row.appendChild(th);
    }
    else {
      for(let value in data[key]) {
        const th = document.createElement('th');
        th.textContent = `planet ${value}`;
        row.appendChild(th);
      }
    }
  }
};

const displayData = (url) => {
  const data = fetchCharacters(url);

  initializeTable();
  addDataKeys(data[0]);

  for(let i = 0; i < data.length; i++) {
    const row = document.createElement('tr');
    for(let key in data[i]) {
      if(typeof data[i][key] !== 'object') {
        const td = document.createElement('td');
        td.textContent = data[i][key];
        row.appendChild(td);
      }
      else {
        for(let objKey in data[i][key]) {
          const td = document.createElement('td');
          td.textContent = `${data[i][key][objKey]}`;
          row.appendChild(td);
        }
      }
    }
    table.appendChild(row);
  }
};

const start = async () => {
  const url = 'https://swapi.dev/api/people/';
  displayData(url);
};

start();