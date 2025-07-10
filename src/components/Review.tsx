import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { data } from '../data/Data';
import type { Book } from '../types/Book';
import './Review.css';

const Review: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      const foundBook = data.find(element => element.slug === slug);
      if (foundBook) {
        setBook(foundBook);
      }
    }
  }, [slug]);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Container>
      <div className="review">
        <Row>
          <Col xs={12} lg={3}>
            <Image src={book.pic} thumbnail className="reviewImage"/>
          </Col>
          <Col xs={12} lg={9} className="align-items-center">
            <Row>
              <Col lg={12} className="reviewTextName align-items-center">
                {book.name}
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="reviewTextAuthor align-items-center">
                Author: {book.author}
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="reviewTextRating align-items-center">
                Rating: {book.rating}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="reviewTextSynopsis">
            <b>Synopsis:</b> {book.synopsis}
          </Col>
        </Row>
        {book.webnovel ? 
          <Row>
            <Col lg={12} className="reviewTextReview reviewTextReviewTop">
              <b>Review:</b> {book.review}
            </Col>    
            <Col lg={12} className="reviewTextReview">
              <b>Protagonist:</b> {book.protagonist}
            </Col>
            <Col lg={12} className="reviewTextReview">
              <b>World Building:</b> {book.charactersAndWorld}
            </Col>
            <Col lg={12} className="reviewTextReview">
              <b>Complex Ideas:</b> {book.addresses}
            </Col>
            <Col lg={12} className="reviewTextReview">
              <b>Criticism:</b> {book.cons}
            </Col> 
            <Col lg={12} className="reviewTextReview reviewTextReviewBottom">
              <b>Final Judgement:</b> {book.judgement}
            </Col>                     
          </Row>
          :
          <Row>
            <Col lg={12} className="reviewTextReview reviewTextReviewTop">
              <b>Review:</b> {book.review}
            </Col>
            <Col lg={12} className="reviewTextReview">
              <b>Complex Ideas:</b> {book.addresses}
            </Col>
            <Col lg={12} className="reviewTextReview">
              <b>Criticism:</b> {book.cons}
            </Col> 
            <Col lg={12} className="reviewTextReview reviewTextReviewBottom">
              <b>Final Judgement:</b> {book.judgement}
            </Col>                     
          </Row>
        }
      </div>
    </Container>
  );
};

export default Review;
