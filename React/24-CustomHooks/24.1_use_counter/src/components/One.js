import useCounter from "../hooks/useCounter";

const One = () => {
  const {counter, addOne, double} = useCounter(10);

  return ( 
    <div>
      counter1 = {counter}
      <br />
      <button onClick={() => addOne()}>Add one</button>
      <br />
      <button onClick={() => double()}>double</button>
      <br />
    </div> 
  );
}
 
export default One;