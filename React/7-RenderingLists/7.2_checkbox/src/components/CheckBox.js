import React, {useState} from 'react';


function CheckBox({text, checked}) {
  const [isChecked, setIsChecked] = useState(checked);
  return <div>
    <input type="checkbox" checked={isChecked} onChange={() => {setIsChecked(prev => !prev)}} />
    <label>{text}</label>
  </div>;
}

export default CheckBox;