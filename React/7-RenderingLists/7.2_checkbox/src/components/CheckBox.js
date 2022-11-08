function CheckBox({text, check}) {
  return <div>
    <input type="checkbox" checked={check} />
    <label>{text}</label>
  </div>;
}

export default CheckBox;