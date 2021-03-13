import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BookPreview from './BookPreview'

var data = module.require("./Data")

export default class AllBooks extends Component {
    render() {
        return (
            <Container>
                <Row>
                {data.map((i, index) => {
                            return (
                                <Col xs={12} lg={12} key={index} onClick={(e) => {this.props.history.push(`/book/${i.slug}`)}}>
                                    <BookPreview name={i.name} pic={i.pic} author={i.author} synopsis={i.synopsis} rating={i.rating} />
                                </Col>
                            )
                        })}  
                </Row>                
            </Container>
        )
    }
}
