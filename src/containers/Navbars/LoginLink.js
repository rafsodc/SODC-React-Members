import React from 'react';
import Nav from "react-bootstrap/Nav";


// We can use the 'as' prop to render Nav.Link as a react-router-dom NavLink.
// See https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together

const LoginLink = React.memo((props) => (
  props.authenticated ? <Nav.Link href="/logout">Logout</Nav.Link> : <Nav.Link href="/members">Members' Login</Nav.Link>
));


export default LoginLink