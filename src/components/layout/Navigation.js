import React from "react";
import { Navbar, Nav, Container, Link } from "react-bootstrap";

const Navigation = () => {
  return (
    // <Navbar bg="primary">
    //   <Container >
    //     <Navbar.Brand href="#" className="text-white">Holy Frijole Chili Cook Off</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link href="#" className="text-white">Link 1</Nav.Link>
    //       <Nav.Link href="#" className="text-white">Link 2</Nav.Link>
    //       <Nav.Link href="#" className="text-white">Link 3</Nav.Link>
    //     </Nav>
    //     <Nav className="justify-content-end">
    //       <Nav.Link href="#" className="text-white">
    //         <i className="fas fa-sign-in-alt"></i> Sign In
    //       </Nav.Link>
    //       <Nav.Link href="#" className="text-white">
    //         <i className="fas fa-user-plus"></i> Create Account
    //       </Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
