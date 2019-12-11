import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
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
    {name: 'Yale', imageAddress: '/images/Yale.png'},
    {name: 'Harvard', imageAddress: '/images/Harvard.png'},
  ];
  console.log(yearLongData);
  return (
    <div className='App-outside'>
      <Navbar bg="dark"  variant="dark" className="header">
          <Navbar.Brand href="#home">
            {/*<img*/}
            {/*  alt=""*/}
            {/*  src="/logo.svg"*/}
            {/*  width="30"*/}
            {/*  height="30"*/}
            {/*  className="d-inline-block align-top"*/}
            {/*/>{' '}*/}
            College Weather Wars
          </Navbar.Brand>
        </Navbar>
      <div 
        className='App'
        >
        <div className="toggle-container">
          <Button onClick={() => setCollegesVisible(!collegesVisible)}>See Current Colleges</Button>
            {collegesVisible && <CollegeGrid
            collegeData={dummyColleges}
          />}
        </div>


        
        <WeatherHeader setWeatherData={setWeatherData} setYearLongData={setYearLongData}/>
        <WeatherGrid data={weatherData} />
        <YearLongGrid 
          winnerData={yearLongData}
        />

      </div>
      <Footer/>
    </div>
  );
}

export default App;
