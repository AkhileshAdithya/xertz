import React, { Component } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './Review.css'

var data = module.require("./Data")
var dataProc = []
export default class Review extends Component {
    state = {
        name: "",
        pic: "",
        rating: "",
        synopsis: "",
        author: "",
        review: ""
    }
    componentDidMount(){
        var path = this.props.location.pathname
        var pathEdit = path.substr(6)
        data.forEach(element => {
            if(element.slug === pathEdit){
                dataProc = element
            }
        });
        this.setState({name: dataProc.name, pic: dataProc.pic, rating: dataProc.rating, synopsis: dataProc.synopsis, author: dataProc.author, review: dataProc.review})
    }
    render() {
        return (
            <Container>
                <div className="bookPreview">
                    <Row>
                        <Col xs={12} lg={3}>
                            <Image src={`/${this.state.pic}`} thumbnail className="bookPreviewImage"/>
                        </Col>
                        <Col xs={12} lg={9}>
                            <Row>
                                <Col lg={12} className="bookPreviewTextName">
                                    {this.state.name}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="bookPreviewTextAuthor">
                                    {this.state.author}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="bookPreviewTextRating">
                                    Rating: {this.state.rating}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="bookPreviewTextSynopsis">
                                    {this.state.synopsis}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
            
        )
    }
}
