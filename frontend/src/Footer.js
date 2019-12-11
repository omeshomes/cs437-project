import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Omid from './images/Omid.png';
import Evan from './images/Evan.png';
import Manu from './images/Manu.png';
import Noah from './images/Noah.png';

function CollegeGrid(props) {
    return (
        <div class= "footer">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Weather Wars Creators</Navbar.Brand>
                <img class = "profile" src={Omid} alt = "avatar"></img>
                <img class = "profile" src={Evan} alt = "avatar"></img>
                
                <img class = "profile" src={Manu} alt = "avatar"></img>
                <img class = "profile" src={Noah} alt = "avatar"></img>
            </Navbar>
        </div>
        
    );
}

export default CollegeGrid;