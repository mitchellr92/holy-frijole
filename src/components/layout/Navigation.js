import React from "react";
import { Navbar, Nav, Container, Link } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#">Holy Frijole Chili Cook Off</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Link 1</Nav.Link>
          <Nav.Link href="#">Link 2</Nav.Link>
          <Nav.Link href="#">Link 3</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="#">
            <i className="fas fa-sign-in-alt"></i> Sign In
          </Nav.Link>
          <Nav.Link href="#">
            <i className="fas fa-user-plus"></i> Create Account
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
