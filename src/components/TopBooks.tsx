import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BookPreview from './BookPreview';
import { data } from '../data/BookLoader';
import type { Book } from '../types/Book';

const TopBooks: React.FC = () => {
  const [sortedData, setSortedData] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const sorted = sortArray([...data]);
    const top10 = sorted.slice(0, 10);
    setSortedData(top10);
  }, []);

  const sortArray = (arr: Book[]): Book[] => {
    arr.sort((a, b) => parseFloat(b.rating.toString()) - parseFloat(a.rating.toString()));
    return arr;
  };

  const handleBookClick = (slug: string) => {
    navigate(`/book/${slug}`);
  };

  return (
    <Container>
      <Row>
        {sortedData.map((book, index) => (
          <div key={book.slug}>
            <Col xs={12} lg={1} className="d-flex justify-content-end align-items-center topbooks-rank">
              #{index + 1}
            </Col>
            <Col xs={12} lg={11} onClick={() => handleBookClick(book.slug)}>
              <BookPreview 
                name={book.name} 
                pic={book.pic} 
                author={book.author} 
                synopsis={book.synopsis || ''} 
                rating={book.rating} 
              />
            </Col>
          </div>
        ))}  
      </Row>                
    </Container>
  );
};

export default TopBooks;
