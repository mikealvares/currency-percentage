import React from 'react';
import Col from 'react-bootstrap/Col'

const column = (props) =>(
    <Col sm={6} md={props.type} className={['p-10',`txt${props.align}`].join(' ')}>{props.value}</Col>
)

export default column