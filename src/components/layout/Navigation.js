import React from "react";
import { Navbar, Nav, Container, Link } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary">
      <Container >
        <Navbar.Brand href="#" className="text-white">Holy Frijole Chili Cook Off</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#" className="text-white">Link 1</Nav.Link>
          <Nav.Link href="#" className="text-white">Link 2</Nav.Link>
          <Nav.Link href="#" className="text-white">Link 3</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="#" className="text-white">
            <i className="fas fa-sign-in-alt"></i> Sign In
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <i className="fas fa-user-plus"></i> Create Account
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
