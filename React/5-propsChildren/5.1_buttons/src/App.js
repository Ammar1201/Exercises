import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button text='important' style={{fontWeight:'bold'}} />
      <Button text='Not important' />
    </div>
  );
}

export default App;
