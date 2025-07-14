import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BookPreview from './BookPreview';
import { data } from '../data/BookLoader';
import type { Book } from '../types/Book';

const AllBooks: React.FC = () => {
  const [sortedData, setSortedData] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const sorted = sortArray([...data]);
    setSortedData(sorted);
  }, []);

  const sortArray = (arr: Book[]): Book[] => {
    arr.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return arr;
  };

  const handleBookClick = (slug: string) => {
    navigate(`/book/${slug}`);
  };

  return (
    <Container>
      <Row>
        {sortedData.map((book) => (
          <Col xs={12} lg={12} key={book.slug} onClick={() => handleBookClick(book.slug)}>
            <BookPreview 
              name={book.name} 
              pic={book.pic} 
              author={book.author} 
              synopsis={book.synopsis || ''} 
              rating={book.rating} 
            />
          </Col>
        ))}  
      </Row>                
    </Container>
  );
};

export default AllBooks;
