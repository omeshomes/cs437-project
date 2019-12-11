

import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';

function CollegeCard(props) {
    return (
        <div class = "college-card">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {props.data.imageAddress} />
            <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Text>
            A rather presitigous school
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
        
    );
}

export default CollegeCard;


