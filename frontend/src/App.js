import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  WeatherGrid from './WeatherGrid';
import WeatherHeader from './WeatherHeader';
import YearLongGrid from './YearLongGrid';
import CollegeGrid from './CollegeGrid';

function App() {
  const [weatherData, setWeatherData] = useState({})

  return (
    <div className='App-outside'>
      <div 
        className='App'
        >
        <CollegeGrid />
        <WeatherHeader setWeatherData={setWeatherData}/>
        <WeatherGrid data={weatherData} />
        <YearLongGrid />
      </div>
    </div>
  );
}

export default App;
