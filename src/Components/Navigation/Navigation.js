import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="pt-3">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="http://www.boesl.gov.bd/themes/responsive_npf/img/logo/logo.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link" href="#features">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="#pricing">
                Product & Services
              </Nav.Link>
              <Nav.Link className="link" href="#pricing">
                Became a Client
              </Nav.Link>
              <Nav.Link className="link" href="#pricing">
                About Us
              </Nav.Link>
            </Nav>
            <Nav className="log-reg-button">
              <button>Login</button> <button>Register</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
