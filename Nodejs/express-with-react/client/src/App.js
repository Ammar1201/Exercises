import { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [message, setMessage] = useState('');

  //  "proxy": "http://localhost:5000"
  const fetchData = async (city) => {
    try {
      const res = await fetch('http://localhost:5000/current?city=' + city);
      if (!res.ok) {
        throw Error();
      }
      const data = await res.json();
      if (data.location === undefined || data.current === undefined) {
        setMessage(data.error.message);
        return;
      }
      setMessage('');
      setWeatherData(data);
    }
    catch (err) {
      setMessage(err.message);
    }
  };

  const changerHandler = ({ target }) => {
    setCity(target.value);
  };

  const getWeatherHandler = () => {
    fetchData(city);
  };

  return (
    <div>
      <label htmlFor="">Enter City Name to get Weather:</label>
      <input type="text" value={city} onChange={changerHandler} />
      <button onClick={getWeatherHandler}>Get Weather</button>
      <div>
        {message && <h1>{message}</h1>}
        {!message && weatherData && <h2>Weather in {weatherData.location.name} is {weatherData.current.condition.text}</h2>}
        {!message && weatherData && <h3>Temperature in Celsius is {weatherData.current.temp_c} degrees.</h3>}
        {!message && weatherData && <h3>Temperature in fahrenheit is {weatherData.current.temp_f} degrees.</h3>}
        {!message && weatherData && <h3>Temperature feels like in Celsius is {weatherData.current.feelslike_c} degrees.</h3>}
        {!message && weatherData && <h3>Temperature feels like in fahrenheit is {weatherData.current.feelslike_f} degrees.</h3>}
        {!message && weatherData && <h3>Humidity is {weatherData.current.humidity}</h3>}
      </div>
    </div>
  );
}

export default App;