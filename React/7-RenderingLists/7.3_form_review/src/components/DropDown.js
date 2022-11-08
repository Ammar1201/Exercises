function DropDown({getSelected, enabledOrDisabled}) {
  const changeHandler = ({target}) => {
    getSelected(target.value);
  };

  return <div>
    <label>Age: </label>
    <select onChange={changeHandler} disabled={enabledOrDisabled}>
      <option value="0-15">0-15</option>
      <option value="15-30">15-30</option>
      <option value="30-40">30-40</option>
      <option value="Over 40">Over 40</option>
    </select>
  </div>
}

export default DropDown;