import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  WeatherGrid from './WeatherGrid';
import WeatherHeader from './WeatherHeader';

function App() {
  const [weatherData, setWeatherData] = useState({})

  return (
    <div className='App-outside'>
      <div 
        className='App'
        >
        <WeatherHeader setWeatherData={setWeatherData}/>
        <WeatherGrid data={weatherData} />
      </div>
    </div>
  );
}

export default App;
