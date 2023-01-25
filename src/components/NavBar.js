import React from 'react'
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../img/MCS_Logo_Icon__W_1.png';
// import McsTitle from '../MCS/Website Collateral/MCS_Logo_B.png';

export default function NavBar() {
  return (
    <div>
    <Navbar collapseOnSelect bg="" variant="dark" expand="lg" className='navBar'>
    <Container>
    <Navbar.Brand href="#home">
      <img src={Logo} className='navLogo' alt="Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
      <Nav>
        <Nav.Link className='navItem' id="navBarItem" href="#home">MCS</Nav.Link>
        <Nav.Link className='navItem' id="navBarItem" href="#ourStory">Our Story</Nav.Link>
        {/* <Nav.Link className='navItem' id="navBarItem" href="#roadmap">Roadmap</Nav.Link> */}
        <Nav.Link className='navItem' id="navBarItem" href="#ourTeam">Our Team</Nav.Link>
        <Nav.Link className='navItem' id="navBarItem" href="#contact">Contact</Nav.Link>
        <Nav.Link className='navItem' id="navBarItem" href="#faq">FAQ</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}
