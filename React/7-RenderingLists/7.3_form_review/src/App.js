import React, {useState} from 'react';
import Input from './components/Input';
import DropDown from './components/DropDown';
import ShowInfo from './components/ShowInfo';
import TextArea from './components/TextArea';


const App = () => {
  const [info, setInfo] = useState(['', '', '0-15', '']);
  const [hidden, setHidden] = useState('hidden');
  const [enabledOrDisabled, setEnabledOrDisabled] = useState('');

  const firstNameValue = (value) => {
    setInfo(prevInfo => [value, prevInfo[1], prevInfo[2], prevInfo[3]]);
  };

  const lastNameValue = (value) => {
    setInfo(prevInfo => [prevInfo[0], value, prevInfo[2], prevInfo[3]]);
  };
  
  const getSelectedValue = (value) => {
    setInfo(prevInfo => [prevInfo[0], prevInfo[1], value, prevInfo[3]]);
  };

  const textValue = (value) => {
    setInfo(prevInfo => [prevInfo[0], prevInfo[1], prevInfo[2], value]);
  };

  const hideInfo = (value) => {
    setHidden(value);
    setEnabledOrDisabled('');
  };

  // const sendInfo = (value) => {};

  const clickHandler = (event) => {
    event.preventDefault();
    setHidden('');
    setEnabledOrDisabled('disabled');
  };

  return <form>
    <Input text='First Name:' getValue={firstNameValue} enabledOrDisabled={enabledOrDisabled} />
    <Input text='Last Name:' getValue={lastNameValue} enabledOrDisabled={enabledOrDisabled} />
    <DropDown getSelected={getSelectedValue} enabledOrDisabled={enabledOrDisabled} />
    <TextArea text='Free Text:' getText={textValue} enabledOrDisabled={enabledOrDisabled} />
    <button onClick={clickHandler}>Continue</button>
    <ShowInfo info={info} hide={hidden} back={hideInfo} />
  </form>
}

export default App;
