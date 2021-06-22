import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {DisplayRouteNav} from "../../containers/Routes/Routes";
import {headerRoutes} from "../../containers/Routes/RouteDefs";


// We can use the 'as' prop to render Nav.Link as a react-router-dom NavLink.
// See https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together

const headerNavbar = React.memo(() => {
  return (
    <Navbar bg="app-primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">RAF SODC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <DisplayRouteNav routes={headerRoutes}/>
        </Nav>
        <Nav>
          <Nav.Link href="/members">Members' Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});


export default headerNavbar