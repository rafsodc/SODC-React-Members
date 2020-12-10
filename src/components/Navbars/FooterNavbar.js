import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const footerNavbar = ( ) => (
  <Navbar fixed="bottom" bg="app-secondary" variant="dark" expand="lg">
      <Nav className="m-auto">
        <Nav.Link href="#home">Terms and Conditions</Nav.Link>
        <Nav.Link href="#link">Privacy Notice</Nav.Link>
        <Nav.Link href="#link">Members' Area</Nav.Link>
      </Nav>
  </Navbar>
);

export default footerNavbar