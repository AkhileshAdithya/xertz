import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BookPreview from './BookPreview'

var unsortedData = module.require("./Data")

export default class AllBooks extends Component {
    state = {
        sortedData: []
    }
    componentDidMount(){
        var data = this.sortArray(unsortedData)
        this.setState({sortedData : data})
    }
    sortArray = (arr) => {
        arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        return arr;
    }
    render() {
        return (
            <Container>
                <Row>
                {unsortedData.map((i, index) => {
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
