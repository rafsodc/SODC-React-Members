import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const headerNavbar = ( ) => (
  <Navbar bg="app-primary" variant="dark" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="About Us" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">The Club</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">The Committee</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Past Dinners</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Contact Us</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#link">Members' Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default headerNavbar