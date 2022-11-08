import './ShowInfo.css';

function ShowInfo({info, hide, back}) {
  const backHandle = (event) => {
    event.preventDefault();
    back('hidden');
  };

  // const sendHandle = () => {};

  return <div className={hide}>
    <h4>Review your form:</h4>
    {info.map((text, index) => <h4 key={index}>{text}</h4>)}
    <button onClick={backHandle}>Back</button>
    <button type='submit'>Send Survey</button>
  </div>
}

export default ShowInfo;