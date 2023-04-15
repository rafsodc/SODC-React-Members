import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'

// We can use the 'as' prop to render Nav.Link as a react-router-dom NavLink.
// See https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together

const LoginLink = React.memo((props) => (
  props.authenticated ? <NavDropdown title={props.user} id="basic-nav-dropdown">
      <NavDropdown.Item as={NavLink} to={'/members'}>Members' Area</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to={'/myaccount'}>My Account</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to={'/logout'}>Logout</NavDropdown.Item>
    </NavDropdown>
    : <Nav.Link as={NavLink} to={'/members'}>Members' Login</Nav.Link>
))

export default LoginLink