import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
//import './App.css';

function WeatherHeader(props) {
    const [year,setYear] = useState(null);
    const [month,setMonth] = useState(null);
    const [day,setDay] = useState(null);

    const monthToInt = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    }

    const dayOptions = [];

    for( let i = 0; i < 28; i++) {
        dayOptions.push(<option key={i+1} value={i+1}>{i + 1}</option>);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        event.stopPropagation();

        try {
            const response = await fetch(`http://127.0.0.1:5000/weather/${year}-${monthToInt[month]}-${day}`);
            const resObject = await response.json();
            console.log('response json', resObject)
            props.setWeatherData(resObject)
        } catch (e) {
            console.log("Got error: ",  e);
        }
    }

    return (
        <Navbar className='navbar'>
            <Navbar.Brand> Weather Wars </Navbar.Brand>
            <Form inline onSubmit={handleSubmit}>
                <InputGroup>
                    <FormControl
                        as="select"
                        defaultValue='Year...'
                        onChange={(event) => setYear(event.target.value)}
                    >
                        <option value='2010'>2010</option>
                        <option value='2011'>2011</option>
                        <option value='2012'>2012</option>
                        <option value='2013'>2013</option>
                        <option value='2014'>2014</option>
                        <option value='2015'>2015</option>
                        <option value='2016'>2016</option>
                        <option value='2017'>2017</option>
                        <option value='2018'>2018</option>
                        <option value='2019'>2019</option>
                    </FormControl>
                </InputGroup>
                <InputGroup>
                <FormControl
                        as="select"
                        defaultValue='Month...'
                        onChange={(event) => setMonth(event.target.value)}
                    >
                        <option value='January'>January</option>
                        <option value='February'>February</option>
                        <option value='March'>March</option>
                        <option value='April'>April</option>
                        <option value='May'>May</option>
                        <option value='June'>June</option>
                        <option value='July'>July</option>
                        <option value='August'>August</option>
                        <option value='September'>September</option>
                        <option value='October'>October</option>
                        <option value='November'>November</option>
                        <option value='December'>December</option>
                    </FormControl>
                </InputGroup>
                <InputGroup
                    key={month}
                >
                <FormControl
                        as="select"
                        defaultValue='Day...'
                        disabled={month === null }
                        onChange={(event) => {setDay(event.target.value)}}
                    >
                        {dayOptions}
                        {month !== 'February' &&
                            [<option key={29} value='29'>29</option>,
                            <option key={30} value='30'>30</option>
                            ]
                        }
                        {!(month === 'September' || month === 'April' || month === 'June' || month === 'November') && 
                        (month !== 'February') &&
                        <option key={31} value='31'>31</option>}
                    </FormControl>
                </InputGroup>
                <Button variant="primary" onChange={handleSubmit} type="submit">
                    Submit
                </Button>
            </Form>
        </Navbar>
    );
}

export default WeatherHeader;