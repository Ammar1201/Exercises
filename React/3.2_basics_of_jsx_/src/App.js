function App() {
  const data = ["hello", "world"];

  const number1 = 5;
  const number2 =6;

  const string = "I love React!"

  return (
    <div>
      <h2>{data[0]} {data[1]}</h2>
      <h2>{number1} + {number2} = {number1+number2}</h2>
      <h2>The string's length is {string.length}</h2>
    </div>
  );
}

export default App;
