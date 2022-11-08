import React, { useState } from 'react';
import CustomButton from "./components/CustomButton";

const App = () => {
  const colors = ["blue","red","yellow"];
  const [selectedColor, setSelectedColor] = useState('');

  const pickColor = (color) => {
    setSelectedColor(color);
  };

  return <div>
    {colors.map((color, index) => <CustomButton selectedColor={pickColor} key={index} text={color} />)}
    <h2>selected color is: {selectedColor}</h2>
  </div>;
}

export default App;
