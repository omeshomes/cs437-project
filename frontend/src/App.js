import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  WeatherGrid from './WeatherGrid';
import WeatherHeader from './WeatherHeader';

function App() {


  return (
    <div className='App-outside'>
      <div 
        className='App'
        >
        <WeatherHeader/>
        <WeatherGrid/>
      </div>
    </div>
  );
}

export default App;
