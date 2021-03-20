import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './BookPreview.css'

export class BookPreview extends Component {
    render() {
        return (
            <Container>
                <div className="bookPreview">
                    <Row>
                        <Col xs={12} lg={3} className="d-flex align-items-center">
                            <Image src={this.props.pic} thumbnail className="bookPreviewImage"/>
                        </Col>
                        <Col xs={12} lg={9}>
                            <Row>
                                <Col lg={12} className="bookPreviewTextName">
                                    {this.props.name}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="bookPreviewTextAuthor">
                                    {this.props.author}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="bookPreviewTextRating">
                                    Rating: {this.props.rating}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="bookPreviewTextSynopsis">
                                    {this.props.synopsis}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
            
        )
    }
}

export default BookPreview
