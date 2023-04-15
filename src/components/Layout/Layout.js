import React from 'react'
import Aux from '../../hoc/Aux'
import FooterNavbar from '../Navbars/FooterNavbar'
import { Container } from 'react-bootstrap'
import Header from '../Header/Header'
import AlertWindow from '../AlertWindow/AlertWindow'

const Layout = (props) => (
  <Aux>
    <Header user={props.user}/>
    <main>
      <Container className={'h-100 mt-2'}>
        <AlertWindow/>
        {props.children}
      </Container>
    </main>
    <footer className="footer">
      <FooterNavbar/>
    </footer>
  </Aux>
)

export default Layout