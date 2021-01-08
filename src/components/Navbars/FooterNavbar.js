import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { DisplayRouteNav, footerRoutes } from "../Routes/Routes";

const footerNavbar = ( ) => (
  <Navbar fixed="bottom" bg="app-secondary" variant="dark" expand="lg">
      <Nav className="m-auto">
        { DisplayRouteNav(footerRoutes) }
      </Nav>
  </Navbar>
);

export default footerNavbar