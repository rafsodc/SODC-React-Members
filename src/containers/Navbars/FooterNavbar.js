import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {DisplayRouteNav} from "../Routes/Routes";
import {footerRoutes} from "../Routes/RouteDefs";

const footerNavbar = React.memo(() => {
  return (
    <Navbar fixed="bottom" bg="app-secondary" variant="dark" expand="lg">
      <Nav className="m-auto">
        <DisplayRouteNav routes={footerRoutes}/>
      </Nav>
    </Navbar>
  )
});

export default footerNavbar