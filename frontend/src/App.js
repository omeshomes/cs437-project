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


//git commit -m "name of commit"
// why are we not using class instead?
// where is render?
function App() {
  const [weatherData, setWeatherData] = useState({})
  const dummytable = [];
  for (let i = 1; i < 366; i++) {
    dummytable.push({day: i,school: (i % 3 === 0 ) ? "Harvard" : "Yale"});
  } 
  const [collegesVisible, setCollegesVisible] = useState(false);

  const dummyColleges = [
    {name: 'Yale', imageAddress: './Yale.png'},
    {name: 'Harvard', imageAddress: './Harvard.png'},
  ];

  return (
    <div className='App-outside'>
      <div 
        className='App'
        >
          <Button class = "Toggle" onClick={() => setCollegesVisible(!collegesVisible)}> Toggle </Button>
          {collegesVisible && <CollegeGrid 
          collegeData={dummyColleges}
        />}
        
        <WeatherHeader setWeatherData={setWeatherData}/>
        <WeatherGrid data={weatherData} />
        <YearLongGrid 
          winnerData={dummytable}
        />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
