import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import Container from './components/Container';
import Order from './components/Order';
import Msg from './components/Msg';
import {data} from './data';

const Main = styled.div`
  margin-bottom: 50px;

  & h1, & h2 {
    text-align: center;
    color: green;
  }
`;

const H2 = styled.h2`
  text-align: center;
  color: white;
  margin: 20px 0;
`;

function App() {
  const [toppings, setToppings] = useState([]);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('#56887d');

  const handleClick = ({target}) => {
    if(toppings.length >= 5) {
      setMsg('You have reached the maximum possible toppings');
      setError('red');
      return;
    }
    const tmp = data.find(turtle => turtle.pizzaToppings.find(topping => topping.name === target.textContent));
    const topping = tmp.pizzaToppings.find((topping => topping.name === target.textContent));
    if(!toppings.includes(topping)) {
      setToppings(prevTopping => [...prevTopping, topping]);
      setMsg('');
    }
    else {
      setMsg('Already selected!');
    }
  };

  return (
    <Fragment>
      <Main>
        <h1>Ninja Turtles</h1>
        <h2>Order pizza with the turtles</h2>
      </Main>
      <Container>
        {data.map((turtle, index) =>
          <Card key={index}>
            <h2>{turtle.name}</h2>
            <img src={turtle.img} alt="img" />
            <h3>Toppings:</h3>
            <div>
              {turtle.pizzaToppings.map((topping, index) => <button key={'bt' + index} onClick={handleClick}>{topping.name}</button>)}
            </div>
          </Card>
        )}
      </Container>
      <H2>Our Order:</H2>
      <Container>
        {toppings.map((topping, index) => 
          <Order key={index} color={error}>
            <h4>{topping.name}</h4>
            <img src={topping.img} alt="img" />
          </Order>)
        }
      </Container>
      {<Msg><label>{msg}</label></Msg>}
    </Fragment>
  );
}

export default App;
