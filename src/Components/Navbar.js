import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand id="logo">Rajapalayam Yoga</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navs">
          <Nav className="me-auto" >
            <Nav.Link>Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item>SKY Yoga</NavDropdown.Item>
              <NavDropdown.Item >Founder</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">President</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">WCSC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">WCSC & UN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">SKY Centres</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Program" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Online</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Residential</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kayakalpa Yoga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Youth Programs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">SKY ENERGY</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.6">SKY Centres</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Siddha Online</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Book Store</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Village Service Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Research</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Help</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Join Us</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Discover" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Guided Meditation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sponsor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bliss 111</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Group Meditation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Daily Updates</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">veWa-eMagazine</NavDropdown.Item>
            </NavDropdown>
          </Nav>

      </div>
      <Button variant="info">Login</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;