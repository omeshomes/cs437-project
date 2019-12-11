import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import  WeatherGrid from './WeatherGrid';
import WeatherHeader from './WeatherHeader';
import YearLongGrid from './YearLongGrid';
import CollegeGrid from './CollegeGrid';
import Footer from './Footer.js';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [yearLongData, setYearLongData] = useState([]);
  const dummytable = [];
  
  for (let i = 1; i < 366; i++) {
    dummytable.push({day: i,school: (i % 3 === 0 ) ? "Harvard" : "Yale"});
  } 
  const [collegesVisible, setCollegesVisible] = useState(false);

  const dummyColleges = [
    {name: 'Yale', imageAddress: './Yale.png'},
    {name: 'Harvard', imageAddress: './Harvard.png'},
  ];
  console.log(yearLongData);
  return (
    <div className='App-outside'>
      <div 
        className='App'
        >
          <Button class = "Toggle" onClick={() => setCollegesVisible(!collegesVisible)}> Toggle </Button>
          {collegesVisible && <CollegeGrid 
          collegeData={dummyColleges}
        />}
        
        <WeatherHeader setWeatherData={setWeatherData} setYearLongData={setYearLongData}/>
        <WeatherGrid data={weatherData} />
        <YearLongGrid 
          winnerData={yearLongData}
        />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
