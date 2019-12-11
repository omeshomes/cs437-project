

import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import logo from './images/Yale.png';

function CollegeCard(props) {
    return (
        <div class = "college-card">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {logo} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Sample Text for school: {}
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
        
    );
}

export default CollegeCard;


