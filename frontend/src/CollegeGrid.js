import React, {useState} from 'react';
import College from './CollegeCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Parent from './ExampleParent.js';

function CollegeGrid(props) {
    return (
        <div class= "C">
            
            <h1>Colleges in Database </h1>
            {/* how to include data here that will be passed down (aka loop through records) */}
            <Container>
                <Row>
                    <Col xs> <College/> </Col>
                    <Col xs={{ order: 12 }}> <College/> Second, but last</Col>
                    <Col xs={{ order: 1 }}>  <College/> Third, but second</Col>
                </Row>
            </Container>
           
        </div>
        
    );
}

export default CollegeGrid;