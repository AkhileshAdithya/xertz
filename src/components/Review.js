import React, { Component } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './Review.css'

var data = require("./Data")
var dataProc = []
export default class Review extends Component {
    state = {
        name: "",
        pic: "",
        rating: "",
        synopsis: "",
        author: "",
        review: "",
        protagonist: "",
        charactersAndWorld: "",
        addresses: "",
        cons: "",
        judgement: "",
        webnovel: true
    }
    componentDidMount(){
        window.scrollTo(0,0)
        var path = this.props.location.pathname
        var pathEdit = path.substr(6)
        data.forEach(element => {
            if(element.slug === pathEdit){
                dataProc = element
            }
        });
        this.setState({name: dataProc.name, 
            pic: dataProc.pic, 
            rating: dataProc.rating, 
            synopsis: dataProc.synopsis, 
            author: dataProc.author, 
            review: dataProc.review,
            charactersAndWorld:dataProc.charactersAndWorld,
            protagonist:dataProc.protagonist,
            addresses:dataProc.addresses,
            cons:dataProc.cons,
            judgement:dataProc.judgement,
            webnovel:dataProc.webnovel
        })
    }
    render() {
        return (
            <Container>
                <div className="review">
                    <Row>
                        <Col xs={12} lg={3}>
                            <Image src={this.state.pic} thumbnail className="reviewImage"/>
                        </Col>
                        <Col xs={12} lg={9} className="align-items-center">
                            <Row>
                                <Col lg={12} className="reviewTextName align-items-center">
                                    {this.state.name}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="reviewTextAuthor align-items-center">
                                    Author: {this.state.author}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="reviewTextRating align-items-center">
                                    Rating: {this.state.rating}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="reviewTextSynopsis">
                            <b>Synopsis:</b> {this.state.synopsis}
                        </Col>
                    </Row>
                    {this.state.webnovel ? 
                        <Row>
                        <Col lg={12} className="reviewTextReview reviewTextReviewTop">
                            <b>Review:</b> {this.state.review}
                        </Col>    
                        <Col lg={12} className="reviewTextReview">
                            <b>Protagonist:</b> {this.state.protagonist}
                        </Col>
                        <Col lg={12} className="reviewTextReview">
                            <b>World Building:</b> {this.state.charactersAndWorld}
                        </Col>
                        <Col lg={12} className="reviewTextReview">
                            <b>Complex Ideas:</b> {this.state.addresses}
                        </Col>
                        <Col lg={12} className="reviewTextReview">
                            <b>Criticism:</b> {this.state.cons}
                        </Col> 
                        <Col lg={12} className="reviewTextReview reviewTextReviewBottom">
                            <b>Final Judgement:</b> {this.state.judgement}
                        </Col>                     
                    </Row>
                    :
                    <Row>
                        <Col lg={12} className="reviewTextReview reviewTextReviewTop">
                            <b>Review:</b> {this.state.review}
                        </Col>
                        <Col lg={12} className="reviewTextReview">
                            <b>Complex Ideas:</b> {this.state.addresses}
                        </Col>
                        <Col lg={12} className="reviewTextReview">
                            <b>Criticism:</b> {this.state.cons}
                        </Col> 
                        <Col lg={12} className="reviewTextReview reviewTextReviewBottom">
                            <b>Final Judgement:</b> {this.state.judgement}
                        </Col>                     
                    </Row>
                }
                </div>
            </Container>
            
        )
    }
}
