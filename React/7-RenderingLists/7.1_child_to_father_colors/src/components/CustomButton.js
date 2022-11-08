function CustomButton(props) {
  const clickHandle = ({target}) => {
    props.selectedColor(target.textContent);
  };


  return <button onClick={clickHandle}>{props.text}</button>;
}

export default CustomButton;