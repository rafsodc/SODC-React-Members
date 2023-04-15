import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { DisplayRouteNav } from '../Routes/Routes'
import { footerRoutes } from '../Routes/RouteDefs'
import '../../resources/css/Footer.css'

const footerNavbar = React.memo(() => {
  return (
    <Navbar bg="app-secondary" variant="dark" expand="lg">
      <Nav className="m-auto">
        <DisplayRouteNav routes={footerRoutes}/>
      </Nav>
    </Navbar>
  )
})

export default footerNavbar