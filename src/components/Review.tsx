import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { data } from '../data/BookLoader';
import type { Book } from '../types/Book';
import MarkdownRenderer from './MarkdownRenderer';

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
        
        {/* Render the flexible markdown review content */}
        <Row>
          <Col lg={12}>
            <MarkdownRenderer 
              content={book.review} 
              className="reviewContent"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Review;
