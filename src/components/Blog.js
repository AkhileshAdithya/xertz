import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Blog.css'

export default class Blog extends Component {
    render() {
        return (
            <Container as="div" className="blog">
                <Row>
                    <Col className="blog-space-start" lg={12}>
                    
                    </Col>
                    <Col className="d-flex justify-content-end align-items-end" xs={12} lg={6}>
                        <span className="blog-text-xertz">Xertz</span><span className="blog-text-verb">[verb]</span>
                    </Col>
                    <Col className="d-flex justify-content-start align-items-center" xs={12} lg={6} >
                        <span className="blog-text-info"> To gulp down enthusiastically, heartily, and quickly.</span>
                    </Col>
                    <Col className="blog-space-small" lg={12}>
                    
                    </Col>
                    <Col className="blog-space-small" lg={12}>
                    
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center" lg={12}>
                        This is a blog where I review books after I xertz them down.
                    </Col>
                    <Col className="blog-space-big" lg={12}>
                    
                    </Col>
                    <Col className="blog-space-big" lg={12}>
                    
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4} className="d-flex justify-content-center ">
                        <Link to="/all"><span className="blog-text">All Books</span></Link>
                    </Col>
                    <Col xs={12} lg={4} className="d-flex justify-content-center ">
                        <Link to="/top"><span className="blog-text">Top 10 books</span></Link>
                    </Col>
                    <Col xs={12} lg={4} className="d-flex justify-content-center ">
                        <a href="https://akhileshadithya.github.io"><span className="blog-text">About</span></a>
                    </Col>
                </Row>
            </Container>
        )
    }
}
