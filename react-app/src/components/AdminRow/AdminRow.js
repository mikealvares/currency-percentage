import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const adminRow = (props) => (
    <Container className="AdminRow">
        <Row className="AdminPadding">
            <Col sm={1}>{props.id}</Col>
            <Col sm={4}>{props.title}</Col>
            <Col sm={3}>{props.currency}</Col>
            <Col sm={4}>
                <input type="text" value={props.value} onChange={props.changed} />
            </Col>
        </Row>
    </Container>
)

export default adminRow