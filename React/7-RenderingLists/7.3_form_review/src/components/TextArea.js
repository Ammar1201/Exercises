function TextArea({text, getText, enabledOrDisabled}) {
  const changeHandler = ({target}) => {
    getText(target.value);
  };

  return <div>
    <label>{text}</label>
    <br />
    <textarea cols="30" rows="5" onChange={changeHandler} disabled={enabledOrDisabled} />
  </div>
}

export default TextArea;