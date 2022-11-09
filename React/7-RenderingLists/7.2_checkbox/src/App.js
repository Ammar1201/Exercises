import CheckBox from "./components/CheckBox";

const App = () => {
  return <div>
    <CheckBox text='I read the term of the app' checked={false} />
    <CheckBox text='I accept the term of the app' checked={false} />
    <CheckBox text='I want to get the weekly news letter' checked={true} />
    <CheckBox text='I want to get sales and offers' checked={true} />
  </div>
}

export default App;
