import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Column from './Column/Column'

import './Table.css'

const table = (props) =>{
    const Heading = props.head.map((item)=>{
        return <Column key={item.id} type={item.size} value={item.title} align={item.align}/>
    })
    const TableData =props.data.map((rec)=>{
        let row = rec.map(
            (itm) => {
                return (<Column key={parseInt(itm.id)} type={itm.size} value={itm.title} align={itm.align} />)
            }
        )
        return <Row className="dataRow">{row}</Row>
    })
    return (
        <Container className="Bdr">
            <Row className="Heading">
                {Heading}
            </Row>
            {TableData}
            <span><em>Last Updated on: {props.udt}</em></span>
        </Container>
    )
}

export default table;