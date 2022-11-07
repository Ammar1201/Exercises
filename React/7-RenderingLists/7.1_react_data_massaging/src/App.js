import React, {useState} from 'react';
import Name from "./components/Name";
import Card from "./components/Card";
import data from './data.js';

const getNames = () => {
  return data.map(person => person.name);
};

const getBornBefore = () => {
  return data.filter(person => {
    if(parseInt(person.birthday.substring(5)) < 1990) {
      return person;
    }
  });
};

const App = () => {
  const [names] = useState(getNames());
  const [bornBefore] = useState(getBornBefore());

  return (
    <div>
      <div>
        {names.map((name, index) => <Name key={index} name={name} />)}
      </div>
      <h2>People:</h2>
      <div>
        {bornBefore.map((person, index) => <Card key={index} person={person} />)}
      </div>
    </div>
  );
}

export default App;