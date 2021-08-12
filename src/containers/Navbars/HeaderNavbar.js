import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {DisplayRouteNav} from "../../containers/Routes/Routes";
import {headerRoutes} from "../../containers/Routes/RouteDefs";
import LoginLink from './LoginLink';


// We can use the 'as' prop to render Nav.Link as a react-router-dom NavLink.
// See https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together

const headerNavbar = React.memo((props) => {
  console.log(props);
  return (
    <Navbar bg="app-primary" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to={"/"}>RAF SODC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <DisplayRouteNav routes={headerRoutes}/>
        </Nav>
        <Nav>
          <LoginLink authenticated={props.authenticated} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});


export default headerNavbar