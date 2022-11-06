import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button text='important' style={{fontWeight:'bold'}}></Button>
      <Button text='Not important'></Button>
    </div>
  );
}

export default App;
