import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { DisplayRouteNav, headerRoutes } from "../../containers/Routes/Routes";


// We can use the 'as' prop to render Nav.Link as a react-router-dom NavLink.
// See https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together

const headerNavbar = React.memo(() => {
  return (
    <Navbar bg="app-primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <DisplayRouteNav routes={headerRoutes} />
        </Nav>
        <Nav>
          <Nav.Link href="#link">Members' Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});


export default headerNavbar