import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" className="px-3">
      <Navbar.Brand as={NavLink} to="/">XERTZ</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} to="/top">Top 10</Nav.Link>
        <Nav.Link as={NavLink} to="/all">All Books</Nav.Link>
        <Nav.Link href="https://akhileshadithya.github.io">Akhilesh</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
