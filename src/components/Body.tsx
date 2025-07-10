import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import AllBooks from './AllBooks';
import TopBooks from './TopBooks';
import Review from './Review';

const Body: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/all" element={<AllBooks />} />
      <Route path="/top" element={<TopBooks />} />
      <Route path="/book/:slug" element={<Review />} />
    </Routes>
  );
};

export default Body;
