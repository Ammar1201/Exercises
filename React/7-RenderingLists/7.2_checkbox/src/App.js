import CheckBox from "./components/CheckBox";

const App = () => {
  return <div>
    <CheckBox text='I read the term of the app' />
    <CheckBox text='I accept the term of the app' />
    <CheckBox text='I want to get the weekly news letter' check='true' />
    <CheckBox text='I want to get sales and offers' check='true' />
  </div>
}

export default App;
