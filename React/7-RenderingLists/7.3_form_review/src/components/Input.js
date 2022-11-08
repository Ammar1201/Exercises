function Input({text, getValue, enabledOrDisabled}) {
  const changeHandler = ({target}) => {
    getValue(target.value);
  };

  return <div>
    <label>{text}</label>
    <input type='text' onChange={changeHandler} disabled={enabledOrDisabled} />
  </div>
}

export default Input;