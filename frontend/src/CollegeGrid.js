import React, {useState} from 'react';
import College from './CollegeCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Parent from './ExampleParent.js';

function CollegeGrid(props) {

    const item = [];
    for(let i = 0; i < props.collegeData.length; i++)
    {
        item.push(<div>
            <Col>
                <College
                data = {props.collegeData[i]}
                />
            </Col>
            </div>);
    }
    return (
        <div>
            <h1>Colleges in Database </h1>
            <Container>
                <Row>
                {item}
                {/* <Col>Col 1</Col>
                <Col>Col 2</Col> */}
                {/* <Col>Col 2</Col> */}
                </Row>
            </Container>
        </div>
        
    );
}

export default CollegeGrid;