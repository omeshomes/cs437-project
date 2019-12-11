import React, {useState} from 'react';
 import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

function CollegeGrid(props) {
    return (
        <div class= "footer">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Weather Wars Creators</Navbar.Brand>
                <img class = "profile" src='./images/Omid.png' alt = "avatar"></img>
                <img class = "profile" src='/images/Evan.png' alt = "avatar"></img>
                <img class = "profile" src='/images/Manu.png' alt = "avatar"></img>
                <img class = "profile" src='/images/Noah.png' alt = "avatar"></img>
            </Navbar>
            
        </div>
        
    );
}

export default CollegeGrid;