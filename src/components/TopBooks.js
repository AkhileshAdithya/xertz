import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BookPreview from './BookPreview'
import './TopBooks.css'

var unsortedData = module.require("./Data")

export default class TopBooks extends Component {
    state = {
        sortedData: []
    }
    componentDidMount(){
        var data = this.sortArray(unsortedData)
        var data2 = data.slice(0,10)
        this.setState({sortedData : data2})
    }
    sortArray = (arr) => {
        arr.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        return arr
    }
    render() {
        return (
            <Container>
                <Row>
                    {this.state.sortedData.map((i, index) => {
                        return (<>
                            <Col xs={12} lg={1} className="d-flex justify-content-end align-items-center topbooks-rank">
                            #{index + 1}
                            </Col>
                            <Col xs={12} lg={11} key={index} onClick={(e) => {this.props.history.push(`/book/${i.slug}`)}}>
                                <BookPreview name={i.name} pic={i.pic} author={i.author} synopsis={i.synopsis} rating={i.rating} />
                            </Col>
                            </>
                        )
                    })}  
                </Row>                
            </Container>
        )
    }
}
