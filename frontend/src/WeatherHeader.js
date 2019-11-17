import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
//import './App.css';

function WeatherHeader() {
    return (
        <Navbar className='navbar'>
            <Navbar.Brand> Weather Wars </Navbar.Brand>
            <Form inline>
                <InputGroup>
                    <FormControl
                        placeholder="Year"
                        aria-label="Year"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup>
                    <FormControl
                        placeholder="Month"
                        aria-label="Month"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup>
                    <FormControl
                        placeholder="Day"
                        aria-label="Day"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Form>
        </Navbar>
    );
}

export default WeatherHeader;