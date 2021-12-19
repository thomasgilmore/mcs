import React from 'react'
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../MCS/*LOGO/MCS_Icon_Bcircle.jpg';
import McsTitle from '../MCS/*LOGO/MCS_Logo_B.jpg';

export default function NavBar() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" sticky="top">
    <Container>
    <Navbar.Brand href="#home">
      <img src={Logo} className='navLogo' alt="Logo" />
      <img src={McsTitle} className='navMcsTitle' alt="MCS" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href="#home">MCS</Nav.Link>
        <Nav.Link href="#memes">Our Story</Nav.Link>
        <Nav.Link href="#roadmap">Roadmap</Nav.Link>
        <Nav.Link href="#ourTeam">Our Team</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}
