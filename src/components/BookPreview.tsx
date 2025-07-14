import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

interface BookPreviewProps {
  name: string;
  pic: string;
  author: string;
  synopsis: string;
  rating: number;
}

const BookPreview: React.FC<BookPreviewProps> = ({ name, pic, author, synopsis, rating }) => {
  return (
    <Container>
      <div className="bookPreview">
        <Row>
          <Col xs={12} lg={3} className="d-flex align-items-center">
            <Image src={pic} thumbnail className="bookPreviewImage"/>
          </Col>
          <Col xs={12} lg={9}>
            <Row>
              <Col lg={12} className="bookPreviewTextName">
                {name}
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="bookPreviewTextAuthor">
                {author}
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="bookPreviewTextRating">
                Rating: {rating}
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="bookPreviewTextSynopsis">
                {synopsis}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BookPreview;
