import useCounter from "../hooks/useCounter";

const Two = () => {
  const {counter, removeOne, divide} = useCounter(50);

  return ( 
    <div>
      counter2 = {counter}
      <br />
      <button onClick={() => removeOne()}>Remove one</button>
      <br />
      <button onClick={() => divide()}>divide</button>
      <br />
    </div> 
  );
}
 
export default Two;